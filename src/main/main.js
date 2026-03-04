const fs = require("fs");
const path = require("path");
const { spawn } = require("child_process");
const electronModule = require("electron");

if (typeof electronModule === "string") {
  // Some environments set ELECTRON_RUN_AS_NODE globally.
  const relaunchEnv = { ...process.env };
  delete relaunchEnv.ELECTRON_RUN_AS_NODE;
  const child = spawn(electronModule, process.argv.slice(1), {
    stdio: "inherit",
    env: relaunchEnv
  });
  child.on("close", (code) => process.exit(code || 0));
  return;
}

const { app, BrowserWindow, ipcMain, dialog, shell, Tray, Menu, nativeImage } = electronModule;
const { AgentService, fileTimestamp } = require("./agent-service");

let mainWindow = null;
let agentService = null;
let tray = null;
let isQuitting = false;
let closeChoiceInProgress = false;
let appSettings = { closeBehavior: "ask", language: "en" };

const SUPPORTED_LANGUAGES = new Set(["en", "zh-CN", "ru"]);
const MAIN_I18N = {
  en: {
    appTitle: "picox Desktop",
    trayTooltip: "picox CLI",
    trayOpenPanel: "Open Panel",
    trayQuit: "Quit",
    closeDialogTitle: "Exit picox CLI",
    closeDialogMessage: "How should the app behave when you close the window?",
    closeDialogDetail: "You can change the default behavior later in Settings.",
    closeDialogRemember: "Remember this choice",
    closeDialogExit: "Exit completely",
    closeDialogMinimize: "Minimize to tray",
    closeDialogCancel: "Cancel",
    exportConfigTitle: "Export Agent Config",
    importConfigTitle: "Import Agent Config",
    exportBackupTitle: "Export Agent Backup",
    importBackupTitle: "Import Agent Backup"
  },
  "zh-CN": {
    appTitle: "picox 桌面端",
    trayTooltip: "picox CLI",
    trayOpenPanel: "打开面板",
    trayQuit: "退出",
    closeDialogTitle: "退出 picox CLI",
    closeDialogMessage: "关闭窗口时，应用应如何处理？",
    closeDialogDetail: "你可以稍后在设置中修改默认行为。",
    closeDialogRemember: "记住本次选择",
    closeDialogExit: "完全退出",
    closeDialogMinimize: "最小化到托盘",
    closeDialogCancel: "取消",
    exportConfigTitle: "导出 Agent 配置",
    importConfigTitle: "导入 Agent 配置",
    exportBackupTitle: "导出 Agent 备份",
    importBackupTitle: "导入 Agent 备份"
  },
  ru: {
    appTitle: "picox Desktop",
    trayTooltip: "picox CLI",
    trayOpenPanel: "Открыть панель",
    trayQuit: "Выход",
    closeDialogTitle: "Выход из picox CLI",
    closeDialogMessage: "Как поступать при закрытии окна?",
    closeDialogDetail: "Поведение по умолчанию можно изменить позже в настройках.",
    closeDialogRemember: "Запомнить выбор",
    closeDialogExit: "Выйти полностью",
    closeDialogMinimize: "Свернуть в трей",
    closeDialogCancel: "Отмена",
    exportConfigTitle: "Экспорт конфигурации агента",
    importConfigTitle: "Импорт конфигурации агента",
    exportBackupTitle: "Экспорт резервной копии агента",
    importBackupTitle: "Импорт резервной копии агента"
  }
};

function normalizeLanguage(input) {
  return SUPPORTED_LANGUAGES.has(input) ? input : "en";
}

function trMain(key) {
  const lang = normalizeLanguage(appSettings?.language);
  return MAIN_I18N[lang]?.[key] ?? MAIN_I18N.en[key] ?? key;
}

function getSettingsPath() {
  return path.join(app.getPath("userData"), "runtime", "ui-settings.json");
}

function normalizeSettings(input) {
  const allowed = new Set(["ask", "minimize", "exit"]);
  const closeBehavior = typeof input?.closeBehavior === "string" ? input.closeBehavior : "ask";
  const language = normalizeLanguage(input?.language);
  return {
    closeBehavior: allowed.has(closeBehavior) ? closeBehavior : "ask",
    language
  };
}

function loadSettings() {
  const filePath = getSettingsPath();
  if (!fs.existsSync(filePath)) {
    appSettings = { closeBehavior: "ask", language: "en" };
    return appSettings;
  }
  try {
    const raw = JSON.parse(fs.readFileSync(filePath, "utf8"));
    appSettings = normalizeSettings(raw);
  } catch {
    appSettings = { closeBehavior: "ask", language: "en" };
  }
  return appSettings;
}

function saveSettings(patch) {
  appSettings = normalizeSettings({ ...appSettings, ...(patch || {}) });
  const filePath = getSettingsPath();
  fs.mkdirSync(path.dirname(filePath), { recursive: true });
  fs.writeFileSync(filePath, `${JSON.stringify(appSettings, null, 2)}\n`, "utf8");
  refreshMainLocalization();
  return appSettings;
}

function resolveIconPath(candidates) {
  for (const candidate of candidates) {
    if (candidate && fs.existsSync(candidate)) {
      return candidate;
    }
  }
  return "";
}

function resolveAppIconPath() {
  return resolveIconPath([
    path.join(app.getAppPath(), "assets", "logo.png"),
    path.join(app.getAppPath(), "assets", "icon.png"),
    path.join(process.cwd(), "assets", "logo.png"),
    path.join(process.cwd(), "assets", "icon.png")
  ]);
}

function resolveTrayIconPath() {
  return resolveIconPath([
    path.join(app.getAppPath(), "assets", "tray.png"),
    path.join(app.getAppPath(), "assets", "logo.png"),
    path.join(process.cwd(), "assets", "tray.png"),
    path.join(process.cwd(), "assets", "logo.png"),
    process.execPath
  ]);
}

function resolveImage(iconPath) {
  if (!iconPath) {
    return nativeImage.createEmpty();
  }
  const icon = nativeImage.createFromPath(iconPath);
  if (!icon.isEmpty()) {
    return icon;
  }
  return nativeImage.createEmpty();
}

function showMainWindow() {
  if (!mainWindow || mainWindow.isDestroyed()) {
    createWindow();
    return;
  }
  if (mainWindow.isMinimized()) {
    mainWindow.restore();
  }
  mainWindow.show();
  mainWindow.focus();
}

function ensureTray() {
  if (tray) {
    refreshTrayMenu();
    return;
  }

  const trayImage = resolveImage(resolveTrayIconPath());
  tray = new Tray(trayImage);
  refreshTrayMenu();
  tray.on("double-click", () => showMainWindow());
}

function refreshTrayMenu() {
  if (!tray) {
    return;
  }
  tray.setToolTip(trMain("trayTooltip"));
  const menu = Menu.buildFromTemplate([
    {
      label: trMain("trayOpenPanel"),
      click: () => showMainWindow()
    },
    {
      type: "separator"
    },
    {
      label: trMain("trayQuit"),
      click: () => {
        isQuitting = true;
        app.quit();
      }
    }
  ]);
  tray.setContextMenu(menu);
}

function refreshMainLocalization() {
  refreshTrayMenu();
  if (mainWindow && !mainWindow.isDestroyed()) {
    mainWindow.setTitle(trMain("appTitle"));
  }
}

function hideToTray() {
  ensureTray();
  if (mainWindow && !mainWindow.isDestroyed()) {
    mainWindow.hide();
  }
}

async function handleCloseByBehavior() {
  const behavior = appSettings.closeBehavior || "ask";
  if (behavior === "exit") {
    isQuitting = true;
    app.quit();
    return;
  }
  if (behavior === "minimize") {
    hideToTray();
    return;
  }

  const result = await dialog.showMessageBox(mainWindow, {
    type: "question",
    buttons: [trMain("closeDialogExit"), trMain("closeDialogMinimize"), trMain("closeDialogCancel")],
    defaultId: 1,
    cancelId: 2,
    noLink: true,
    title: trMain("closeDialogTitle"),
    message: trMain("closeDialogMessage"),
    detail: trMain("closeDialogDetail"),
    checkboxLabel: trMain("closeDialogRemember"),
    checkboxChecked: false
  });

  if (result.response === 0) {
    if (result.checkboxChecked) {
      saveSettings({ closeBehavior: "exit" });
    }
    isQuitting = true;
    app.quit();
    return;
  }

  if (result.response === 1) {
    if (result.checkboxChecked) {
      saveSettings({ closeBehavior: "minimize" });
    }
    hideToTray();
  }
}

function createWindow() {
  const iconPath = resolveAppIconPath();
  mainWindow = new BrowserWindow({
    width: 1500,
    height: 980,
    minWidth: 1200,
    minHeight: 780,
    backgroundColor: "#050506",
    title: trMain("appTitle"),
    icon: iconPath || undefined,
    frame: false,
    autoHideMenuBar: true,
    webPreferences: {
      preload: path.join(__dirname, "..", "preload", "preload.js"),
      contextIsolation: true,
      nodeIntegration: false
    }
  });

  mainWindow.setMenuBarVisibility(false);
  mainWindow.removeMenu();
  mainWindow.loadFile(path.join(__dirname, "..", "renderer", "index.html"));

  mainWindow.on("close", async (event) => {
    if (isQuitting) {
      return;
    }
    event.preventDefault();

    if (closeChoiceInProgress) {
      return;
    }

    closeChoiceInProgress = true;
    try {
      await handleCloseByBehavior();
    } finally {
      closeChoiceInProgress = false;
    }
  });
}

function setupIpc() {
  ipcMain.handle("app:init", () => {
    const binary = agentService.resolveBinaryPath();
    return {
      platform: process.platform,
      arch: process.arch,
      userData: agentService.paths.userData,
      runtimeRoot: agentService.paths.root,
      settings: appSettings,
      binary,
      binaryDropPath: path.join(process.cwd(), "resources", "bin", binary.binaryName)
    };
  });

  ipcMain.handle("settings:get", () => appSettings);
  ipcMain.handle("settings:save", (_event, patch) => saveSettings(patch));

  ipcMain.handle("agents:list", () => agentService.listAgents());
  ipcMain.handle("agents:create", (_event, name) => agentService.createAgent(name));
  ipcMain.handle("agents:rename", (_event, id, name) => agentService.renameAgent(id, name));
  ipcMain.handle("agents:start", (_event, id) => agentService.startAgent(id));
  ipcMain.handle("agents:stop", (_event, id) => agentService.stopAgent(id));
  ipcMain.handle("agents:delete", (_event, id) => agentService.deleteAgent(id));

  ipcMain.handle("agents:config:load", (_event, id) => agentService.loadConfig(id));
  ipcMain.handle("agents:config:save", (_event, id, data) => agentService.saveConfig(id, data));
  ipcMain.handle("agents:config:export", async (_event, id) => {
    const result = await dialog.showSaveDialog({
      title: trMain("exportConfigTitle"),
      defaultPath: `${id}-config-${fileTimestamp()}.json`,
      filters: [{ name: "JSON", extensions: ["json"] }]
    });
    if (result.canceled || !result.filePath) {
      return null;
    }
    return agentService.exportConfig(id, result.filePath);
  });
  ipcMain.handle("agents:config:import", async (_event, id) => {
    const result = await dialog.showOpenDialog({
      title: trMain("importConfigTitle"),
      properties: ["openFile"],
      filters: [{ name: "JSON", extensions: ["json"] }]
    });
    if (result.canceled || result.filePaths.length === 0) {
      return null;
    }
    return agentService.importConfig(id, result.filePaths[0]);
  });

  ipcMain.handle("agents:logs:get", (_event, id, maxLines) => agentService.getLogs(id, maxLines));
  ipcMain.handle("agents:logs:clear", (_event, id) => agentService.clearLogs(id));

  ipcMain.handle("agents:backups:list", (_event, id) => agentService.listBackups(id));
  ipcMain.handle("agents:backup:create", (_event, id) => agentService.createBackup(id));
  ipcMain.handle("agents:backup:export", async (_event, id) => {
    const result = await dialog.showSaveDialog({
      title: trMain("exportBackupTitle"),
      defaultPath: `${id}-${fileTimestamp()}.zip`,
      filters: [{ name: "Zip Archive", extensions: ["zip"] }]
    });
    if (result.canceled || !result.filePath) {
      return null;
    }
    return agentService.createBackup(id, result.filePath);
  });
  ipcMain.handle("agents:backup:import", async (_event, preferredName = "") => {
    const result = await dialog.showOpenDialog({
      title: trMain("importBackupTitle"),
      properties: ["openFile"],
      filters: [{ name: "Zip Archive", extensions: ["zip"] }]
    });
    if (result.canceled || result.filePaths.length === 0) {
      return null;
    }
    return agentService.importBackup(result.filePaths[0], preferredName);
  });
  ipcMain.handle("agents:backup:restore", (_event, fileName, preferredName = "") =>
    agentService.restoreFromLocalBackup(fileName, preferredName)
  );

  ipcMain.handle("agents:folder:open", async (_event, id) => {
    const agent = agentService.getAgent(id);
    if (!agent) {
      throw new Error(`Agent ${id} does not exist`);
    }
    await shell.openPath(agent.dir);
    return true;
  });

  ipcMain.handle("window:minimize", () => {
    if (mainWindow && !mainWindow.isDestroyed()) {
      mainWindow.minimize();
    }
    return true;
  });

  ipcMain.handle("window:close", () => {
    if (mainWindow && !mainWindow.isDestroyed()) {
      mainWindow.close();
    }
    return true;
  });
}

app.whenReady().then(() => {
  loadSettings();
  Menu.setApplicationMenu(null);

  const appIcon = resolveImage(resolveAppIconPath());
  if (process.platform === "darwin" && appIcon && !appIcon.isEmpty() && app.dock) {
    app.dock.setIcon(appIcon);
  }

  agentService = new AgentService(app);
  setupIpc();
  createWindow();

  app.on("activate", () => {
    if (BrowserWindow.getAllWindows().length === 0) {
      createWindow();
    } else {
      showMainWindow();
    }
  });
});

app.on("window-all-closed", () => {
  if (!isQuitting && tray) {
    return;
  }
  if (process.platform !== "darwin") {
    app.quit();
  }
});

app.on("before-quit", async () => {
  isQuitting = true;

  if (!agentService) {
    return;
  }

  const active = agentService.listAgents().filter((a) => a.status.running);
  for (const item of active) {
    try {
      await agentService.stopAgent(item.id);
    } catch {}
  }

  if (tray) {
    tray.destroy();
    tray = null;
  }
});


