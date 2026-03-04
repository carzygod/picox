const api = window.picoxApi;

const SUPPORTED_LANGUAGES = ["en", "zh-CN", "ru"];

const LOCALES = {
  en: {
    "app.title": "picox Desktop",
    "brand.subtitle": "Simple desktop shell for picox",
    "window.minimize": "Minimize",
    "window.close": "Close",
    "sidebar.agent_list": "Agent List",
    "sidebar.create_agent": "Create Agent (Wizard)",
    "sidebar.import_backup": "Import Backup",
    "sidebar.refresh": "Refresh",
    "content.rename": "Rename",
    "content.open_folder": "Open Folder",
    "content.delete": "Delete",
    "tab.dashboard": "Dashboard",
    "tab.config": "Config",
    "tab.logs": "Logs",
    "tab.backups": "Backups",
    "tab.settings": "Settings",
    "config.import": "Import Config",
    "config.export": "Export Config",
    "config.reload": "Reload",
    "config.quick_tab": "Quick Config",
    "config.full_tab": "Full Config",
    "config.save_quick": "Save Quick Config",
    "config.save_full": "Save Full Config",
    "field.agent_name": "Agent Name",
    "field.model_alias": "Model Alias",
    "field.model_name": "Model Name",
    "field.api_base": "API Base",
    "field.api_key": "API Key",
    "field.enable_telegram": "Enable Telegram",
    "field.telegram_token": "Telegram Bot Token",
    "field.telegram_allow": "Allowed User IDs (comma separated)",
    "placeholder.model_alias": "e.g. gpt4",
    "placeholder.model_name": "e.g. openai/gpt-5.2",
    "placeholder.api_base": "e.g. https://api.openai.com/v1",
    "placeholder.telegram_allow": "e.g. 123456789, 987654321",
    "logs.refresh": "Refresh Logs",
    "logs.clear": "Clear Logs",
    "backup.create": "Create Backup",
    "backup.export": "Export Backup",
    "backup.restore_as_new": "Restore As New Agent",
    "backup.time": "Time",
    "backup.size": "Size",
    "settings.close_behavior_title": "Window Close Behavior",
    "settings.close.ask": "Ask every time",
    "settings.close.minimize": "Minimize to tray",
    "settings.close.exit": "Exit directly",
    "settings.language": "Language",
    "settings.save": "Save Settings",
    "settings.hint": "When set to Ask, close dialog includes a remember checkbox.",
    "wizard.title": "Create Agent Wizard",
    "wizard.cancel": "Cancel",
    "wizard.back": "Back",
    "wizard.next": "Next",
    "wizard.submit": "Create & Start",
    "wizard.step": "Step {step} / 2",
    "status.running": "Running",
    "status.stopped": "Stopped",
    "action.start": "Start",
    "action.stop": "Stop",
    "action.backup": "Backup",
    "selected.none": "No Agent Selected",
    "msg.select_agent_first": "Please select an agent first.",
    "msg.settings_saved": "Settings saved.",
    "msg.no_agents": "No agents yet. Click create to get started.",
    "msg.dashboard_empty": "Select an agent to view status and controls.",
    "dashboard.status": "Status",
    "dashboard.pid": "PID",
    "dashboard.gateway_port": "Gateway Port",
    "dashboard.created_at": "Created At",
    "dashboard.updated_at": "Updated At",
    "dashboard.last_start": "Last Start",
    "dashboard.stop_agent": "Stop Agent",
    "dashboard.start_agent": "Start Agent",
    "dashboard.create_backup": "Create Backup",
    "dashboard.export_backup": "Export Backup",
    "dashboard.view_logs": "View Logs",
    "dashboard.open_config": "Open Config",
    "agent.id": "ID",
    "agent.port": "Port",
    "agent.last_start": "Last Start",
    "msg.backup_created": "Backup created.",
    "msg.quick_saved": "Quick config saved.",
    "msg.no_config": "No config available.",
    "msg.select_agent_edit_config": "Select an agent to edit config.json.",
    "msg.config_load_failed": "Failed to load config.json.",
    "msg.full_saved": "Full config saved.",
    "prompt.new_field": "New field name",
    "msg.field_exists": "Field already exists.",
    "json.add_field": "Add Field",
    "json.delete": "Delete",
    "json.empty_array": "Empty array, use + buttons to add items.",
    "json.empty_object": "Empty object, click Add Field.",
    "json.null": "null",
    "msg.select_agent_backups": "Select an agent to view backups.",
    "msg.no_backups": "No backups yet.",
    "prompt.optional_new_agent_name": "Optional: new agent name",
    "msg.backup_restored": "Backup restored.",
    "validation.agent_name_required": "Agent name is required.",
    "validation.model_alias_required": "Model alias is required.",
    "validation.model_name_required": "Model name is required.",
    "validation.api_base_required": "API base is required.",
    "validation.api_key_required": "API key is required.",
    "validation.telegram_token_required": "Telegram bot token is required when Telegram is enabled.",
    "validation.telegram_allow_required": "At least one allowed Telegram user ID is required.",
    "msg.agent_created_started": "Agent created and started.",
    "prompt.optional_name_after_import": "Optional: agent name after import",
    "prompt.new_agent_name": "New agent name",
    "confirm.delete_agent": "Delete agent \"{name}\"? This removes config/workspace/logs.",
    "msg.config_imported": "Config imported.",
    "msg.config_exported": "Config exported: {path}",
    "confirm.clear_logs": "Clear logs for current agent?",
    "msg.backup_exported": "Backup exported: {path}"
  },
  "zh-CN": {
    "app.title": "picox 桌面端",
    "brand.subtitle": "picox 的简洁桌面控制台",
    "window.minimize": "最小化",
    "window.close": "关闭",
    "sidebar.agent_list": "Agent 列表",
    "sidebar.create_agent": "创建 Agent（向导）",
    "sidebar.import_backup": "导入备份",
    "sidebar.refresh": "刷新",
    "content.rename": "重命名",
    "content.open_folder": "打开目录",
    "content.delete": "删除",
    "tab.dashboard": "仪表盘",
    "tab.config": "配置",
    "tab.logs": "日志",
    "tab.backups": "备份",
    "tab.settings": "设置",
    "config.import": "导入配置",
    "config.export": "导出配置",
    "config.reload": "重新加载",
    "config.quick_tab": "快速配置",
    "config.full_tab": "完整配置",
    "config.save_quick": "保存快速配置",
    "config.save_full": "保存完整配置",
    "field.agent_name": "Agent 名称",
    "field.model_alias": "模型别名",
    "field.model_name": "模型名称",
    "field.api_base": "API 地址",
    "field.api_key": "API Key",
    "field.enable_telegram": "启用 Telegram",
    "field.telegram_token": "Telegram Bot Token",
    "field.telegram_allow": "允许的用户 ID（逗号分隔）",
    "placeholder.model_alias": "例如 gpt4",
    "placeholder.model_name": "例如 openai/gpt-5.2",
    "placeholder.api_base": "例如 https://api.openai.com/v1",
    "placeholder.telegram_allow": "例如 123456789, 987654321",
    "logs.refresh": "刷新日志",
    "logs.clear": "清空日志",
    "backup.create": "创建备份",
    "backup.export": "导出备份",
    "backup.restore_as_new": "恢复为新 Agent",
    "backup.time": "时间",
    "backup.size": "大小",
    "settings.close_behavior_title": "窗口关闭行为",
    "settings.close.ask": "每次询问",
    "settings.close.minimize": "最小化到托盘",
    "settings.close.exit": "直接退出",
    "settings.language": "语言",
    "settings.save": "保存设置",
    "settings.hint": "当选择“每次询问”时，关闭对话框会提供“记住本次选择”。",
    "wizard.title": "创建 Agent 向导",
    "wizard.cancel": "取消",
    "wizard.back": "返回",
    "wizard.next": "下一步",
    "wizard.submit": "创建并启动",
    "wizard.step": "步骤 {step} / 2",
    "status.running": "运行中",
    "status.stopped": "已停止",
    "action.start": "启动",
    "action.stop": "停止",
    "action.backup": "备份",
    "selected.none": "未选择 Agent",
    "msg.select_agent_first": "请先选择一个 Agent。",
    "msg.settings_saved": "设置已保存。",
    "msg.no_agents": "还没有 Agent，点击创建开始。",
    "msg.dashboard_empty": "请选择一个 Agent 查看状态和操作。",
    "dashboard.status": "状态",
    "dashboard.pid": "进程 PID",
    "dashboard.gateway_port": "网关端口",
    "dashboard.created_at": "创建时间",
    "dashboard.updated_at": "更新时间",
    "dashboard.last_start": "最后启动",
    "dashboard.stop_agent": "停止 Agent",
    "dashboard.start_agent": "启动 Agent",
    "dashboard.create_backup": "创建备份",
    "dashboard.export_backup": "导出备份",
    "dashboard.view_logs": "查看日志",
    "dashboard.open_config": "打开配置",
    "agent.id": "ID",
    "agent.port": "端口",
    "agent.last_start": "最后启动",
    "msg.backup_created": "备份已创建。",
    "msg.quick_saved": "快速配置已保存。",
    "msg.no_config": "没有可用配置。",
    "msg.select_agent_edit_config": "请选择一个 Agent 编辑 config.json。",
    "msg.config_load_failed": "加载 config.json 失败。",
    "msg.full_saved": "完整配置已保存。",
    "prompt.new_field": "新字段名称",
    "msg.field_exists": "字段已存在。",
    "json.add_field": "添加字段",
    "json.delete": "删除",
    "json.empty_array": "数组为空，使用 + 按钮添加项。",
    "json.empty_object": "对象为空，点击“添加字段”。",
    "json.null": "空值",
    "msg.select_agent_backups": "请选择一个 Agent 查看备份。",
    "msg.no_backups": "暂无备份。",
    "prompt.optional_new_agent_name": "可选：新 Agent 名称",
    "msg.backup_restored": "备份已恢复。",
    "validation.agent_name_required": "必须填写 Agent 名称。",
    "validation.model_alias_required": "必须填写模型别名。",
    "validation.model_name_required": "必须填写模型名称。",
    "validation.api_base_required": "必须填写 API 地址。",
    "validation.api_key_required": "必须填写 API Key。",
    "validation.telegram_token_required": "启用 Telegram 时必须填写 Bot Token。",
    "validation.telegram_allow_required": "至少填写一个允许的 Telegram 用户 ID。",
    "msg.agent_created_started": "Agent 已创建并启动。",
    "prompt.optional_name_after_import": "可选：导入后的 Agent 名称",
    "prompt.new_agent_name": "新的 Agent 名称",
    "confirm.delete_agent": "确认删除 Agent “{name}”？此操作会删除 config/workspace/logs。",
    "msg.config_imported": "配置已导入。",
    "msg.config_exported": "配置已导出：{path}",
    "confirm.clear_logs": "确认清空当前 Agent 的日志？",
    "msg.backup_exported": "备份已导出：{path}"
  },
  ru: {
    "app.title": "picox Desktop",
    "brand.subtitle": "Простой настольный интерфейс для picox",
    "window.minimize": "Свернуть",
    "window.close": "Закрыть",
    "sidebar.agent_list": "Список агентов",
    "sidebar.create_agent": "Создать агента (мастер)",
    "sidebar.import_backup": "Импорт бэкапа",
    "sidebar.refresh": "Обновить",
    "content.rename": "Переименовать",
    "content.open_folder": "Открыть папку",
    "content.delete": "Удалить",
    "tab.dashboard": "Панель",
    "tab.config": "Конфиг",
    "tab.logs": "Логи",
    "tab.backups": "Бэкапы",
    "tab.settings": "Настройки",
    "config.import": "Импорт конфига",
    "config.export": "Экспорт конфига",
    "config.reload": "Перезагрузить",
    "config.quick_tab": "Быстрый конфиг",
    "config.full_tab": "Полный конфиг",
    "config.save_quick": "Сохранить быстрый конфиг",
    "config.save_full": "Сохранить полный конфиг",
    "field.agent_name": "Имя агента",
    "field.model_alias": "Псевдоним модели",
    "field.model_name": "Название модели",
    "field.api_base": "API Base",
    "field.api_key": "API Key",
    "field.enable_telegram": "Включить Telegram",
    "field.telegram_token": "Telegram Bot Token",
    "field.telegram_allow": "Разрешённые ID пользователей (через запятую)",
    "placeholder.model_alias": "например gpt4",
    "placeholder.model_name": "например openai/gpt-5.2",
    "placeholder.api_base": "например https://api.openai.com/v1",
    "placeholder.telegram_allow": "например 123456789, 987654321",
    "logs.refresh": "Обновить логи",
    "logs.clear": "Очистить логи",
    "backup.create": "Создать бэкап",
    "backup.export": "Экспорт бэкапа",
    "backup.restore_as_new": "Восстановить как нового агента",
    "backup.time": "Время",
    "backup.size": "Размер",
    "settings.close_behavior_title": "Поведение при закрытии окна",
    "settings.close.ask": "Спрашивать каждый раз",
    "settings.close.minimize": "Сворачивать в трей",
    "settings.close.exit": "Выходить сразу",
    "settings.language": "Язык",
    "settings.save": "Сохранить настройки",
    "settings.hint": "В режиме “Спрашивать” в диалоге закрытия доступна опция запомнить выбор.",
    "wizard.title": "Мастер создания агента",
    "wizard.cancel": "Отмена",
    "wizard.back": "Назад",
    "wizard.next": "Далее",
    "wizard.submit": "Создать и запустить",
    "wizard.step": "Шаг {step} / 2",
    "status.running": "Запущен",
    "status.stopped": "Остановлен",
    "action.start": "Старт",
    "action.stop": "Стоп",
    "action.backup": "Бэкап",
    "selected.none": "Агент не выбран",
    "msg.select_agent_first": "Сначала выберите агента.",
    "msg.settings_saved": "Настройки сохранены.",
    "msg.no_agents": "Агентов пока нет. Нажмите создать, чтобы начать.",
    "msg.dashboard_empty": "Выберите агента, чтобы увидеть статус и управление.",
    "dashboard.status": "Статус",
    "dashboard.pid": "PID",
    "dashboard.gateway_port": "Порт gateway",
    "dashboard.created_at": "Создан",
    "dashboard.updated_at": "Обновлён",
    "dashboard.last_start": "Последний запуск",
    "dashboard.stop_agent": "Остановить агента",
    "dashboard.start_agent": "Запустить агента",
    "dashboard.create_backup": "Создать бэкап",
    "dashboard.export_backup": "Экспорт бэкапа",
    "dashboard.view_logs": "Открыть логи",
    "dashboard.open_config": "Открыть конфиг",
    "agent.id": "ID",
    "agent.port": "Порт",
    "agent.last_start": "Последний запуск",
    "msg.backup_created": "Бэкап создан.",
    "msg.quick_saved": "Быстрый конфиг сохранён.",
    "msg.no_config": "Конфиг недоступен.",
    "msg.select_agent_edit_config": "Выберите агента для редактирования config.json.",
    "msg.config_load_failed": "Не удалось загрузить config.json.",
    "msg.full_saved": "Полный конфиг сохранён.",
    "prompt.new_field": "Имя нового поля",
    "msg.field_exists": "Поле уже существует.",
    "json.add_field": "Добавить поле",
    "json.delete": "Удалить",
    "json.empty_array": "Массив пуст, используйте + для добавления элементов.",
    "json.empty_object": "Объект пуст, нажмите “Добавить поле”.",
    "json.null": "null",
    "msg.select_agent_backups": "Выберите агента для просмотра бэкапов.",
    "msg.no_backups": "Бэкапов пока нет.",
    "prompt.optional_new_agent_name": "Опционально: новое имя агента",
    "msg.backup_restored": "Бэкап восстановлен.",
    "validation.agent_name_required": "Имя агента обязательно.",
    "validation.model_alias_required": "Псевдоним модели обязателен.",
    "validation.model_name_required": "Название модели обязательно.",
    "validation.api_base_required": "API Base обязателен.",
    "validation.api_key_required": "API Key обязателен.",
    "validation.telegram_token_required": "Bot Token обязателен при включённом Telegram.",
    "validation.telegram_allow_required": "Укажите минимум один Telegram user ID.",
    "msg.agent_created_started": "Агент создан и запущен.",
    "prompt.optional_name_after_import": "Опционально: имя агента после импорта",
    "prompt.new_agent_name": "Новое имя агента",
    "confirm.delete_agent": "Удалить агента “{name}”? Это удалит config/workspace/logs.",
    "msg.config_imported": "Конфиг импортирован.",
    "msg.config_exported": "Конфиг экспортирован: {path}",
    "confirm.clear_logs": "Очистить логи текущего агента?",
    "msg.backup_exported": "Бэкап экспортирован: {path}"
  }
};

const state = {
  appInfo: null,
  agents: [],
  selectedAgentId: "",
  selectedTab: "dashboard",
  selectedConfigView: "quick",
  configDraft: null,
  configOriginal: null,
  logs: "",
  backups: [],
  settings: {
    closeBehavior: "ask",
    language: "en"
  }
};

const els = {
  minimizeWindowBtn: document.getElementById("minimizeWindowBtn"),
  closeWindowBtn: document.getElementById("closeWindowBtn"),
  createAgentBtn: document.getElementById("createAgentBtn"),
  importBackupBtn: document.getElementById("importBackupBtn"),
  refreshAgentsBtn: document.getElementById("refreshAgentsBtn"),
  agentList: document.getElementById("agentList"),
  selectedAgentTitle: document.getElementById("selectedAgentTitle"),
  renameAgentBtn: document.getElementById("renameAgentBtn"),
  openAgentFolderBtn: document.getElementById("openAgentFolderBtn"),
  deleteAgentBtn: document.getElementById("deleteAgentBtn"),
  tabs: Array.from(document.querySelectorAll("nav.tabs .tab-btn[data-tab]")),
  panes: {
    dashboard: document.getElementById("tab-dashboard"),
    config: document.getElementById("tab-config"),
    logs: document.getElementById("tab-logs"),
    backups: document.getElementById("tab-backups"),
    settings: document.getElementById("tab-settings")
  },
  importConfigBtn: document.getElementById("importConfigBtn"),
  exportConfigBtn: document.getElementById("exportConfigBtn"),
  reloadConfigBtn: document.getElementById("reloadConfigBtn"),
  quickConfigTabBtn: document.getElementById("quickConfigTabBtn"),
  fullConfigTabBtn: document.getElementById("fullConfigTabBtn"),
  quickConfigPanel: document.getElementById("quickConfigPanel"),
  fullConfigPanel: document.getElementById("fullConfigPanel"),
  quickAgentName: document.getElementById("quickAgentName"),
  quickModelAlias: document.getElementById("quickModelAlias"),
  quickModelName: document.getElementById("quickModelName"),
  quickApiBase: document.getElementById("quickApiBase"),
  quickApiKey: document.getElementById("quickApiKey"),
  quickTelegramEnabled: document.getElementById("quickTelegramEnabled"),
  quickTelegramToken: document.getElementById("quickTelegramToken"),
  quickTelegramAllowFrom: document.getElementById("quickTelegramAllowFrom"),
  saveQuickConfigBtn: document.getElementById("saveQuickConfigBtn"),
  saveConfigBtn: document.getElementById("saveConfigBtn"),
  configEditor: document.getElementById("configEditor"),
  refreshLogsBtn: document.getElementById("refreshLogsBtn"),
  clearLogsBtn: document.getElementById("clearLogsBtn"),
  logViewer: document.getElementById("logViewer"),
  createBackupBtn: document.getElementById("createBackupBtn"),
  exportBackupBtn: document.getElementById("exportBackupBtn"),
  backupList: document.getElementById("backupList"),
  settingLanguage: document.getElementById("settingLanguage"),
  saveSettingsBtn: document.getElementById("saveSettingsBtn"),
  toastHost: document.getElementById("toastHost"),
  createWizardModal: document.getElementById("createWizardModal"),
  wizardStepLabel: document.getElementById("wizardStepLabel"),
  wizardStep1: document.getElementById("wizardStep1"),
  wizardStep2: document.getElementById("wizardStep2"),
  wizardAgentName: document.getElementById("wizardAgentName"),
  wizardModelAlias: document.getElementById("wizardModelAlias"),
  wizardModelName: document.getElementById("wizardModelName"),
  wizardApiBase: document.getElementById("wizardApiBase"),
  wizardApiKey: document.getElementById("wizardApiKey"),
  wizardTelegramEnabled: document.getElementById("wizardTelegramEnabled"),
  wizardTelegramToken: document.getElementById("wizardTelegramToken"),
  wizardTelegramAllowFrom: document.getElementById("wizardTelegramAllowFrom"),
  wizardCancelBtn: document.getElementById("wizardCancelBtn"),
  wizardPrevBtn: document.getElementById("wizardPrevBtn"),
  wizardNextBtn: document.getElementById("wizardNextBtn"),
  wizardSubmitBtn: document.getElementById("wizardSubmitBtn")
};

const wizardState = {
  open: false,
  step: 1,
  submitting: false
};

let logsRefreshInFlight = false;
let logsAutoRefreshTimer = null;

function normalizeLanguage(input) {
  return SUPPORTED_LANGUAGES.includes(input) ? input : "en";
}

function t(key, vars = {}) {
  const lang = normalizeLanguage(state.settings?.language);
  const template = LOCALES[lang]?.[key] ?? LOCALES.en[key] ?? key;
  return template.replace(/\{(\w+)\}/g, (_match, token) => String(vars[token] ?? ""));
}

function applyStaticI18n() {
  const lang = normalizeLanguage(state.settings?.language);
  document.documentElement.lang = lang;
  document.title = t("app.title");

  document.querySelectorAll("[data-i18n]").forEach((el) => {
    const key = el.getAttribute("data-i18n");
    if (key) {
      el.textContent = t(key);
    }
  });

  document.querySelectorAll("[data-i18n-placeholder]").forEach((el) => {
    const key = el.getAttribute("data-i18n-placeholder");
    if (key) {
      el.setAttribute("placeholder", t(key));
    }
  });

  const tabKeyByName = {
    dashboard: "tab.dashboard",
    config: "tab.config",
    logs: "tab.logs",
    backups: "tab.backups",
    settings: "tab.settings"
  };
  els.tabs.forEach((tab) => {
    const key = tabKeyByName[tab.dataset.tab];
    if (key) {
      tab.textContent = t(key);
    }
  });

  if (els.minimizeWindowBtn) {
    els.minimizeWindowBtn.title = t("window.minimize");
  }
  if (els.closeWindowBtn) {
    els.closeWindowBtn.title = t("window.close");
  }
}

function showToast(message, type = "info") {
  if (!els.toastHost) {
    return;
  }
  const toast = document.createElement("div");
  toast.className = `toast ${type === "error" ? "toast-error" : ""}`;
  toast.textContent = String(message || "");
  els.toastHost.appendChild(toast);
  window.setTimeout(() => {
    toast.remove();
  }, 2600);
}

function showError(error) {
  const message = error && error.message ? error.message : String(error);
  showToast(message, "error");
}

function showInfo(message) {
  showToast(message, "info");
}

function safeClone(value) {
  return JSON.parse(JSON.stringify(value));
}

function bytesToText(bytes) {
  if (!Number.isFinite(bytes) || bytes <= 0) {
    return "0 B";
  }
  const units = ["B", "KB", "MB", "GB"];
  let i = 0;
  let n = bytes;
  while (n >= 1024 && i < units.length - 1) {
    n /= 1024;
    i += 1;
  }
  return `${n.toFixed(i === 0 ? 0 : 2)} ${units[i]}`;
}

function fmtDate(value) {
  if (!value) {
    return "-";
  }
  const d = new Date(value);
  if (Number.isNaN(d.getTime())) {
    return value;
  }
  return d.toLocaleString();
}

function parseIdList(raw) {
  const text = String(raw || "");
  return text
    .split(/[\n,]/)
    .map((item) => item.trim())
    .filter(Boolean);
}

function stringifyIdList(list) {
  if (!Array.isArray(list)) {
    return "";
  }
  return list.map((item) => String(item)).join(", ");
}

function getSelectedAgent() {
  return state.agents.find((a) => a.id === state.selectedAgentId) || null;
}

function getAtPath(path) {
  let cursor = state.configDraft;
  for (const seg of path) {
    if (cursor === undefined || cursor === null) {
      return undefined;
    }
    cursor = cursor[seg];
  }
  return cursor;
}

function ensureSelectedAgent() {
  const selected = getSelectedAgent();
  if (!selected) {
    showInfo(t("msg.select_agent_first"));
    return null;
  }
  return selected;
}

function renderSettings() {
  const value = state.settings?.closeBehavior || "ask";
  const radios = Array.from(document.querySelectorAll('input[name="closeBehavior"]'));
  for (const radio of radios) {
    radio.checked = radio.value === value;
  }
  if (els.settingLanguage) {
    els.settingLanguage.value = normalizeLanguage(state.settings?.language);
  }
}

async function loadSettings() {
  try {
    const payload = await api.getSettings();
    if (payload && typeof payload === "object") {
      state.settings = {
        closeBehavior: payload.closeBehavior || "ask",
        language: normalizeLanguage(payload.language)
      };
    }
  } catch {}
  applyStaticI18n();
  renderSettings();
}

function rerenderLocalizedUI() {
  applyStaticI18n();
  renderSettings();
  renderAgentList();
  renderSelectedTitle();
  renderDashboard();
  renderQuickConfig();
  renderConfigEditor();
  if (getSelectedAgent()) {
    renderBackups();
  } else if (els.backupList) {
    els.backupList.innerHTML = `<div class="empty-state">${t("msg.select_agent_backups")}</div>`;
  }
  if (wizardState.open) {
    setWizardStep(wizardState.step);
  }
}

async function saveSettingsAction() {
  const checked = document.querySelector('input[name="closeBehavior"]:checked');
  const closeBehavior = checked ? checked.value : "ask";
  const language = normalizeLanguage(els.settingLanguage?.value);
  try {
    const saved = await api.saveSettings({ closeBehavior, language });
    state.settings = {
      closeBehavior: saved?.closeBehavior || "ask",
      language: normalizeLanguage(saved?.language)
    };
    rerenderLocalizedUI();
    showInfo(t("msg.settings_saved"));
  } catch (error) {
    showError(error);
  }
}

function renderRuntimeInfo() {
  // Hidden by UI requirement.
}

function setTab(tabName) {
  state.selectedTab = tabName;
  for (const tab of els.tabs) {
    tab.classList.toggle("active", tab.dataset.tab === tabName);
  }
  for (const [key, pane] of Object.entries(els.panes)) {
    pane.classList.toggle("active", key === tabName);
  }

  if (tabName === "logs") {
    refreshLogs();
  }
  if (tabName === "backups") {
    refreshBackups();
  }
}

function setConfigView(nextView) {
  const view = nextView === "full" ? "full" : "quick";
  state.selectedConfigView = view;
  els.quickConfigTabBtn.classList.toggle("active", view === "quick");
  els.fullConfigTabBtn.classList.toggle("active", view === "full");
  els.quickConfigPanel.classList.toggle("active", view === "quick");
  els.fullConfigPanel.classList.toggle("active", view === "full");
}
function renderAgentList() {
  els.agentList.innerHTML = "";
  if (state.agents.length === 0) {
    const empty = document.createElement("div");
    empty.className = "empty-state";
    empty.textContent = t("msg.no_agents");
    els.agentList.appendChild(empty);
    return;
  }

  for (const agent of state.agents) {
    const card = document.createElement("div");
    card.className = `agent-card ${agent.id === state.selectedAgentId ? "active" : ""}`;
    card.addEventListener("click", () => {
      selectAgent(agent.id);
    });

    const top = document.createElement("div");
    top.className = "agent-top";
    const name = document.createElement("div");
    name.className = "agent-name";
    name.textContent = agent.meta.name || agent.id;
    const badge = document.createElement("div");
    badge.className = `status-badge ${agent.status.running ? "status-running" : "status-stopped"}`;
    badge.textContent = agent.status.running ? t("status.running") : t("status.stopped");
    top.appendChild(name);
    top.appendChild(badge);
    card.appendChild(top);

    const meta = document.createElement("div");
    meta.className = "agent-meta";
    meta.innerHTML = `
      <div>${t("agent.id")}: ${agent.id}</div>
      <div>${t("agent.port")}: ${(agent.config && agent.config.gateway && agent.config.gateway.port) || "-"}</div>
      <div>${t("agent.last_start")}: ${fmtDate(agent.meta.lastStartedAt)}</div>
    `;
    card.appendChild(meta);

    const actions = document.createElement("div");
    actions.className = "agent-actions";

    const toggleBtn = document.createElement("button");
    toggleBtn.className = "btn btn-xs";
    toggleBtn.textContent = agent.status.running ? t("action.stop") : t("action.start");
    toggleBtn.addEventListener("click", async (event) => {
      event.stopPropagation();
      try {
        if (agent.status.running) {
          await api.stopAgent(agent.id);
        } else {
          await api.startAgent(agent.id);
        }
        await refreshAgents(false);
      } catch (error) {
        showError(error);
      }
    });

    const backupBtn = document.createElement("button");
    backupBtn.className = "btn btn-xs";
    backupBtn.textContent = t("action.backup");
    backupBtn.addEventListener("click", async (event) => {
      event.stopPropagation();
      try {
        await api.createBackup(agent.id);
        showInfo(t("msg.backup_created"));
        if (agent.id === state.selectedAgentId) {
          await refreshBackups();
        }
      } catch (error) {
        showError(error);
      }
    });

    actions.appendChild(toggleBtn);
    actions.appendChild(backupBtn);
    card.appendChild(actions);
    els.agentList.appendChild(card);
  }
}

function renderSelectedTitle() {
  const selected = getSelectedAgent();
  els.selectedAgentTitle.textContent = selected ? `${selected.meta.name || selected.id} (${selected.id})` : t("selected.none");
}

function renderDashboard() {
  const pane = els.panes.dashboard;
  const selected = getSelectedAgent();
  if (!selected) {
    pane.innerHTML = `<div class="empty-state">${t("msg.dashboard_empty")}</div>`;
    return;
  }

  const port = selected.config && selected.config.gateway ? selected.config.gateway.port : "-";
  pane.innerHTML = `
    <div class="dashboard-grid">
      <div class="stat-card">
        <div class="stat-title">${t("dashboard.status")}</div>
        <div class="stat-value">${selected.status.running ? t("status.running") : t("status.stopped")}</div>
      </div>
      <div class="stat-card">
        <div class="stat-title">${t("dashboard.pid")}</div>
        <div class="stat-value">${selected.status.pid || "-"}</div>
      </div>
      <div class="stat-card">
        <div class="stat-title">${t("dashboard.gateway_port")}</div>
        <div class="stat-value">${port}</div>
      </div>
      <div class="stat-card">
        <div class="stat-title">${t("dashboard.created_at")}</div>
        <div class="stat-value">${fmtDate(selected.meta.createdAt)}</div>
      </div>
      <div class="stat-card">
        <div class="stat-title">${t("dashboard.updated_at")}</div>
        <div class="stat-value">${fmtDate(selected.meta.updatedAt)}</div>
      </div>
      <div class="stat-card">
        <div class="stat-title">${t("dashboard.last_start")}</div>
        <div class="stat-value">${fmtDate(selected.meta.lastStartedAt)}</div>
      </div>
    </div>
    <div class="dashboard-actions">
      <button class="btn btn-primary" id="dashToggleBtn">${selected.status.running ? t("dashboard.stop_agent") : t("dashboard.start_agent")}</button>
      <button class="btn btn-soft" id="dashBackupBtn">${t("dashboard.create_backup")}</button>
      <button class="btn btn-soft" id="dashExportBtn">${t("dashboard.export_backup")}</button>
      <button class="btn btn-soft" id="dashLogsBtn">${t("dashboard.view_logs")}</button>
      <button class="btn btn-soft" id="dashConfigBtn">${t("dashboard.open_config")}</button>
    </div>
  `;

  document.getElementById("dashToggleBtn").addEventListener("click", async () => {
    try {
      if (selected.status.running) {
        await api.stopAgent(selected.id);
      } else {
        await api.startAgent(selected.id);
      }
      await refreshAgents(false);
    } catch (error) {
      showError(error);
    }
  });

  document.getElementById("dashBackupBtn").addEventListener("click", async () => {
    try {
      await api.createBackup(selected.id);
      showInfo(t("msg.backup_created"));
      await refreshBackups();
    } catch (error) {
      showError(error);
    }
  });

  document.getElementById("dashExportBtn").addEventListener("click", async () => {
    try {
      await api.exportBackup(selected.id);
      await refreshBackups();
    } catch (error) {
      showError(error);
    }
  });

  document.getElementById("dashLogsBtn").addEventListener("click", () => {
    setTab("logs");
  });

  document.getElementById("dashConfigBtn").addEventListener("click", () => {
    setTab("config");
    setConfigView("quick");
  });
}

async function refreshAgents(keepSelection = true) {
  const previous = state.selectedAgentId;
  const list = await api.listAgents();

  for (const item of list) {
    try {
      item.config = await api.loadConfig(item.id);
    } catch {
      item.config = null;
    }
  }

  state.agents = list;
  const ids = new Set(list.map((a) => a.id));
  if (!keepSelection || !ids.has(previous)) {
    state.selectedAgentId = list[0] ? list[0].id : "";
  } else {
    state.selectedAgentId = previous;
  }

  renderAgentList();
  renderSelectedTitle();
  renderDashboard();
}

async function selectAgent(id) {
  state.selectedAgentId = id;
  renderAgentList();
  renderSelectedTitle();
  renderDashboard();
  await Promise.all([loadConfig(), refreshLogs(), refreshBackups()]);
}

function ensureConfigRoots(cfg) {
  if (!cfg || typeof cfg !== "object" || Array.isArray(cfg)) {
    return {};
  }
  if (!cfg.agents || typeof cfg.agents !== "object") {
    cfg.agents = {};
  }
  if (!cfg.agents.defaults || typeof cfg.agents.defaults !== "object") {
    cfg.agents.defaults = {};
  }
  if (!Array.isArray(cfg.model_list)) {
    cfg.model_list = [];
  }
  if (!cfg.channels || typeof cfg.channels !== "object") {
    cfg.channels = {};
  }
  if (!cfg.channels.telegram || typeof cfg.channels.telegram !== "object") {
    cfg.channels.telegram = {
      enabled: false,
      token: "",
      allow_from: []
    };
  }
  return cfg;
}

function findModelEntry(cfg, alias) {
  if (!cfg || !Array.isArray(cfg.model_list)) {
    return null;
  }
  const key = String(alias || "").trim();
  if (!key) {
    return cfg.model_list.find((item) => item && typeof item === "object") || null;
  }
  return cfg.model_list.find((item) => item && typeof item === "object" && item.model_name === key) || null;
}

function getQuickDataFromConfig(cfg, selected) {
  const safe = ensureConfigRoots(safeClone(cfg || {}));
  const defaults = safe.agents.defaults || {};
  const defaultAlias = String(defaults.model || "").trim() || "gpt4";
  const entry = findModelEntry(safe, defaultAlias) || {};
  const telegram = safe.channels.telegram || {};

  return {
    agentName: selected ? String(selected.meta.name || selected.id || "") : "",
    modelAlias: defaultAlias,
    modelName: String(entry.model || ""),
    apiBase: String(entry.api_base || ""),
    apiKey: String(entry.api_key || ""),
    telegramEnabled: Boolean(telegram.enabled),
    telegramToken: String(telegram.token || ""),
    telegramAllowFrom: stringifyIdList(telegram.allow_from)
  };
}

function renderQuickConfig() {
  const selected = getSelectedAgent();
  if (!selected || !state.configDraft) {
    els.quickAgentName.value = "";
    els.quickModelAlias.value = "";
    els.quickModelName.value = "";
    els.quickApiBase.value = "";
    els.quickApiKey.value = "";
    els.quickTelegramEnabled.checked = false;
    els.quickTelegramToken.value = "";
    els.quickTelegramAllowFrom.value = "";
    return;
  }

  const quick = getQuickDataFromConfig(state.configDraft, selected);
  els.quickAgentName.value = quick.agentName;
  els.quickModelAlias.value = quick.modelAlias;
  els.quickModelName.value = quick.modelName;
  els.quickApiBase.value = quick.apiBase;
  els.quickApiKey.value = quick.apiKey;
  els.quickTelegramEnabled.checked = quick.telegramEnabled;
  els.quickTelegramToken.value = quick.telegramToken;
  els.quickTelegramAllowFrom.value = quick.telegramAllowFrom;
}

function getQuickDataFromInputs() {
  return {
    agentName: String(els.quickAgentName.value || "").trim(),
    modelAlias: String(els.quickModelAlias.value || "").trim(),
    modelName: String(els.quickModelName.value || "").trim(),
    apiBase: String(els.quickApiBase.value || "").trim(),
    apiKey: String(els.quickApiKey.value || "").trim(),
    telegramEnabled: Boolean(els.quickTelegramEnabled.checked),
    telegramToken: String(els.quickTelegramToken.value || "").trim(),
    telegramAllowFrom: String(els.quickTelegramAllowFrom.value || "")
  };
}

function applyQuickDataToConfig(cfg, quick) {
  const safe = ensureConfigRoots(cfg);
  const alias = quick.modelAlias || String(safe.agents.defaults.model || "").trim() || "gpt4";
  safe.agents.defaults.model = alias;

  if (!Array.isArray(safe.model_list)) {
    safe.model_list = [];
  }

  let entryIndex = safe.model_list.findIndex(
    (item) => item && typeof item === "object" && item.model_name === alias
  );
  if (entryIndex < 0) {
    safe.model_list.push({ model_name: alias });
    entryIndex = safe.model_list.length - 1;
  }

  const entry = safe.model_list[entryIndex] && typeof safe.model_list[entryIndex] === "object" ? safe.model_list[entryIndex] : {};
  entry.model_name = alias;
  entry.model = quick.modelName;
  entry.api_base = quick.apiBase;
  entry.api_key = quick.apiKey;
  safe.model_list[entryIndex] = entry;

  const telegram = safe.channels.telegram || {};
  telegram.enabled = Boolean(quick.telegramEnabled);
  telegram.token = quick.telegramToken;
  telegram.allow_from = parseIdList(quick.telegramAllowFrom);
  safe.channels.telegram = telegram;

  return safe;
}

async function saveQuickConfig() {
  const selected = ensureSelectedAgent();
  if (!selected || !state.configDraft) {
    return;
  }

  try {
    const quick = getQuickDataFromInputs();
    const nextCfg = applyQuickDataToConfig(safeClone(state.configDraft), quick);

    if (quick.agentName && quick.agentName !== (selected.meta.name || selected.id)) {
      await api.renameAgent(selected.id, quick.agentName);
    }

    await api.saveConfig(selected.id, nextCfg);
    state.configDraft = safeClone(nextCfg);
    state.configOriginal = safeClone(nextCfg);

    await refreshAgents(true);
    await selectAgent(selected.id);
    showInfo(t("msg.quick_saved"));
  } catch (error) {
    showError(error);
  }
}

async function loadConfig() {
  const selected = getSelectedAgent();
  if (!selected) {
    state.configDraft = null;
    state.configOriginal = null;
    renderQuickConfig();
    els.configEditor.innerHTML = `<div class="empty-state">${t("msg.no_config")}</div>`;
    return;
  }

  try {
    const cfg = await api.loadConfig(selected.id);
    state.configOriginal = safeClone(cfg);
    state.configDraft = safeClone(cfg);
    renderQuickConfig();
    renderConfigEditor();
  } catch (error) {
    showError(error);
    renderQuickConfig();
    els.configEditor.innerHTML = `<div class="empty-state">${t("msg.config_load_failed")}</div>`;
  }
}

async function saveConfig() {
  const selected = ensureSelectedAgent();
  if (!selected || !state.configDraft) {
    return;
  }
  try {
    await api.saveConfig(selected.id, state.configDraft);
    state.configOriginal = safeClone(state.configDraft);
    showInfo(t("msg.full_saved"));
    await refreshAgents(true);
  } catch (error) {
    showError(error);
  }
}
function typeOfValue(value) {
  if (value === null) {
    return "null";
  }
  if (Array.isArray(value)) {
    return "array";
  }
  return typeof value;
}

function getParentAndKey(root, path) {
  if (path.length === 0) {
    return { parent: null, key: null };
  }
  let cursor = root;
  for (let i = 0; i < path.length - 1; i += 1) {
    cursor = cursor[path[i]];
  }
  return { parent: cursor, key: path[path.length - 1] };
}

function setAtPath(path, nextValue, rerender = true) {
  if (path.length === 0) {
    state.configDraft = nextValue;
  } else {
    const { parent, key } = getParentAndKey(state.configDraft, path);
    if (parent !== undefined && parent !== null) {
      parent[key] = nextValue;
    }
  }
  if (rerender) {
    renderConfigEditor();
  }
}

function removeAtPath(path) {
  if (path.length === 0) {
    return;
  }
  const { parent, key } = getParentAndKey(state.configDraft, path);
  if (Array.isArray(parent)) {
    parent.splice(Number(key), 1);
  } else {
    delete parent[key];
  }
  renderConfigEditor();
}

function addObjectField(path) {
  const key = window.prompt(t("prompt.new_field"));
  if (!key) {
    return;
  }
  let target = state.configDraft;
  for (const seg of path) {
    target = target[seg];
  }
  if (Object.prototype.hasOwnProperty.call(target, key)) {
    showInfo(t("msg.field_exists"));
    return;
  }
  target[key] = "";
  renderConfigEditor();
}

function addArrayItem(path, kind) {
  let target = state.configDraft;
  for (const seg of path) {
    target = target[seg];
  }
  let value = "";
  if (kind === "number") {
    value = 0;
  } else if (kind === "boolean") {
    value = false;
  } else if (kind === "object") {
    value = {};
  } else if (kind === "array") {
    value = [];
  } else if (kind === "null") {
    value = null;
  }
  target.push(value);
  renderConfigEditor();
}

function createPrimitiveEditor(value, path) {
  const wrap = document.createElement("div");
  wrap.className = "json-primitive";

  const typeSelect = document.createElement("select");
  const currentType = typeOfValue(value);
  for (const type of ["string", "number", "boolean", "null"]) {
    const opt = document.createElement("option");
    opt.value = type;
    opt.textContent = type;
    opt.selected = type === currentType;
    typeSelect.appendChild(opt);
  }

  const inputWrap = document.createElement("div");
  const inputType = currentType;

  const reassignByType = (targetType, rawValue) => {
    if (targetType === "string") {
      return String(rawValue ?? "");
    }
    if (targetType === "number") {
      const parsed = Number(rawValue);
      return Number.isFinite(parsed) ? parsed : 0;
    }
    if (targetType === "boolean") {
      return Boolean(rawValue);
    }
    return null;
  };

  typeSelect.addEventListener("change", () => {
    const currentValue = getAtPath(path);
    const converted = reassignByType(typeSelect.value, currentValue);
    setAtPath(path, converted, true);
  });

  if (inputType === "boolean") {
    const boolWrap = document.createElement("div");
    boolWrap.className = "json-boolean-wrap";
    const checkbox = document.createElement("input");
    checkbox.type = "checkbox";
    checkbox.checked = Boolean(value);
    checkbox.addEventListener("change", () => {
      setAtPath(path, checkbox.checked, false);
    });
    boolWrap.appendChild(checkbox);
    inputWrap.appendChild(boolWrap);
  } else if (inputType === "number") {
    const input = document.createElement("input");
    input.type = "number";
    input.step = "any";
    input.value = Number.isFinite(value) ? String(value) : "0";
    input.addEventListener("input", () => {
      const parsed = Number(input.value);
      if (Number.isFinite(parsed)) {
        setAtPath(path, parsed, false);
      }
    });
    input.addEventListener("change", () => {
      const parsed = Number(input.value);
      setAtPath(path, Number.isFinite(parsed) ? parsed : 0, false);
    });
    inputWrap.appendChild(input);
  } else if (inputType === "null") {
    const p = document.createElement("div");
    p.className = "json-null";
    p.textContent = t("json.null");
    inputWrap.appendChild(p);
  } else {
    const text = String(value ?? "");
    if (text.length > 120 || text.includes("\n")) {
      const textarea = document.createElement("textarea");
      textarea.rows = Math.min(8, Math.max(3, text.split("\n").length + 1));
      textarea.value = text;
      textarea.addEventListener("input", () => {
        setAtPath(path, textarea.value, false);
      });
      inputWrap.appendChild(textarea);
    } else {
      const input = document.createElement("input");
      input.type = "text";
      input.value = text;
      input.addEventListener("input", () => {
        setAtPath(path, input.value, false);
      });
      inputWrap.appendChild(input);
    }
  }

  wrap.appendChild(typeSelect);
  wrap.appendChild(inputWrap);
  return wrap;
}

function createNodeEditor(value, path, title) {
  const valueType = typeOfValue(value);
  if (valueType !== "object" && valueType !== "array") {
    return createPrimitiveEditor(value, path);
  }

  const box = document.createElement("div");
  box.className = "json-node";
  const header = document.createElement("div");
  header.className = "json-header";

  const titleEl = document.createElement("div");
  titleEl.className = "json-title";
  titleEl.textContent = `${title} (${valueType})`;
  header.appendChild(titleEl);

  const headerActions = document.createElement("div");
  headerActions.className = "json-actions-inline";

  if (valueType === "object") {
    const addBtn = document.createElement("button");
    addBtn.className = "btn btn-xs";
    addBtn.textContent = t("json.add_field");
    addBtn.addEventListener("click", () => addObjectField(path));
    headerActions.appendChild(addBtn);
  } else {
    for (const kind of ["string", "number", "boolean", "object", "array", "null"]) {
      const addBtn = document.createElement("button");
      addBtn.className = "btn btn-xs";
      addBtn.textContent = `+${kind}`;
      addBtn.addEventListener("click", () => addArrayItem(path, kind));
      headerActions.appendChild(addBtn);
    }
  }

  header.appendChild(headerActions);
  box.appendChild(header);

  const children = document.createElement("div");
  children.className = "json-children";

  const entries = valueType === "array" ? value.map((item, idx) => [idx, item]) : Object.entries(value);
  for (const [key, child] of entries) {
    const row = document.createElement("div");
    row.className = "json-row";
    const keyEl = document.createElement("div");
    keyEl.className = "json-key";
    keyEl.textContent = String(key);

    const childWrap = document.createElement("div");
    childWrap.className = "json-editor-cell";
    const childPath = [...path, key];
    const childType = typeOfValue(child);
    if (childType === "object" || childType === "array") {
      childWrap.appendChild(createNodeEditor(child, childPath, String(key)));
    } else {
      childWrap.appendChild(createPrimitiveEditor(child, childPath));
    }

    const removeBtn = document.createElement("button");
    removeBtn.className = "btn btn-xs json-remove-btn";
    removeBtn.textContent = t("json.delete");
    removeBtn.addEventListener("click", () => removeAtPath(childPath));

    row.appendChild(keyEl);
    row.appendChild(childWrap);
    row.appendChild(removeBtn);
    children.appendChild(row);
  }

  if (entries.length === 0) {
    const empty = document.createElement("div");
    empty.className = "empty-state";
    empty.textContent = valueType === "array" ? t("json.empty_array") : t("json.empty_object");
    children.appendChild(empty);
  }

  box.appendChild(children);
  return box;
}

function renderConfigEditor() {
  if (!state.configDraft) {
    els.configEditor.innerHTML = `<div class="empty-state">${t("msg.select_agent_edit_config")}</div>`;
    return;
  }
  els.configEditor.innerHTML = "";
  els.configEditor.appendChild(createNodeEditor(state.configDraft, [], "config"));
}

async function refreshLogs() {
  if (logsRefreshInFlight) {
    return;
  }
  const selected = getSelectedAgent();
  if (!selected) {
    els.logViewer.textContent = "";
    return;
  }
  logsRefreshInFlight = true;
  try {
    const shouldStickToBottom =
      Math.abs(els.logViewer.scrollHeight - els.logViewer.scrollTop - els.logViewer.clientHeight) < 40;
    state.logs = await api.getLogs(selected.id, 3500);
    els.logViewer.textContent = state.logs || "";
    if (shouldStickToBottom) {
      els.logViewer.scrollTop = els.logViewer.scrollHeight;
    }
  } catch (error) {
    showError(error);
  } finally {
    logsRefreshInFlight = false;
  }
}

async function refreshBackups() {
  const selected = getSelectedAgent();
  if (!selected) {
    els.backupList.innerHTML = `<div class="empty-state">${t("msg.select_agent_backups")}</div>`;
    return;
  }
  try {
    state.backups = await api.listBackups(selected.id);
    renderBackups();
  } catch (error) {
    showError(error);
  }
}

function renderBackups() {
  els.backupList.innerHTML = "";
  if (!state.backups.length) {
    els.backupList.innerHTML = `<div class="empty-state">${t("msg.no_backups")}</div>`;
    return;
  }

  for (const item of state.backups) {
    const row = document.createElement("div");
    row.className = "backup-item";
    const main = document.createElement("div");
    main.className = "backup-main";
    main.innerHTML = `
      <div class="backup-name">${item.fileName}</div>
      <div class="backup-meta">${t("backup.time")}: ${fmtDate(item.createdAt)}</div>
      <div class="backup-meta">${t("backup.size")}: ${bytesToText(item.size)}</div>
    `;

    const actions = document.createElement("div");
    actions.className = "json-actions-inline";
    const restoreBtn = document.createElement("button");
    restoreBtn.className = "btn btn-xs";
    restoreBtn.textContent = t("backup.restore_as_new");
    restoreBtn.addEventListener("click", async () => {
      const name = window.prompt(t("prompt.optional_new_agent_name"), "");
      try {
        const imported = await api.restoreBackup(item.fileName, name || "");
        if (imported && imported.id) {
          state.selectedAgentId = imported.id;
          await refreshAgents(true);
          await selectAgent(imported.id);
          showInfo(t("msg.backup_restored"));
        }
      } catch (error) {
        showError(error);
      }
    });
    actions.appendChild(restoreBtn);
    row.appendChild(main);
    row.appendChild(actions);
    els.backupList.appendChild(row);
  }
}
function setWizardStep(step) {
  wizardState.step = step === 2 ? 2 : 1;
  els.wizardStep1.classList.toggle("active", wizardState.step === 1);
  els.wizardStep2.classList.toggle("active", wizardState.step === 2);
  els.wizardStepLabel.textContent = t("wizard.step", { step: wizardState.step });
  els.wizardPrevBtn.style.display = wizardState.step === 1 ? "none" : "inline-block";
  els.wizardNextBtn.style.display = wizardState.step === 1 ? "inline-block" : "none";
  els.wizardSubmitBtn.style.display = wizardState.step === 2 ? "inline-block" : "none";
}

function lockWizardButtons(locked) {
  const disabled = Boolean(locked);
  els.wizardCancelBtn.disabled = disabled;
  els.wizardPrevBtn.disabled = disabled;
  els.wizardNextBtn.disabled = disabled;
  els.wizardSubmitBtn.disabled = disabled;
}

function openCreateWizard() {
  wizardState.open = true;
  wizardState.submitting = false;
  lockWizardButtons(false);

  els.wizardAgentName.value = "";
  els.wizardModelAlias.value = "gpt4";
  els.wizardModelName.value = "";
  els.wizardApiBase.value = "https://api.openai.com/v1";
  els.wizardApiKey.value = "";
  els.wizardTelegramEnabled.checked = true;
  els.wizardTelegramToken.value = "";
  els.wizardTelegramAllowFrom.value = "";

  setWizardStep(1);
  els.createWizardModal.classList.remove("hidden");
  window.setTimeout(() => {
    els.wizardAgentName.focus();
  }, 0);
}

function closeCreateWizard() {
  wizardState.open = false;
  wizardState.submitting = false;
  els.createWizardModal.classList.add("hidden");
}

function collectWizardData() {
  return {
    agentName: String(els.wizardAgentName.value || "").trim(),
    modelAlias: String(els.wizardModelAlias.value || "").trim(),
    modelName: String(els.wizardModelName.value || "").trim(),
    apiBase: String(els.wizardApiBase.value || "").trim(),
    apiKey: String(els.wizardApiKey.value || "").trim(),
    telegramEnabled: Boolean(els.wizardTelegramEnabled.checked),
    telegramToken: String(els.wizardTelegramToken.value || "").trim(),
    telegramAllowFrom: String(els.wizardTelegramAllowFrom.value || "")
  };
}

function validateWizardStep(step) {
  const data = collectWizardData();

  if (step === 1) {
    if (!data.agentName) {
      showInfo(t("validation.agent_name_required"));
      els.wizardAgentName.focus();
      return false;
    }
    if (!data.modelAlias) {
      showInfo(t("validation.model_alias_required"));
      els.wizardModelAlias.focus();
      return false;
    }
    if (!data.modelName) {
      showInfo(t("validation.model_name_required"));
      els.wizardModelName.focus();
      return false;
    }
    if (!data.apiBase) {
      showInfo(t("validation.api_base_required"));
      els.wizardApiBase.focus();
      return false;
    }
    if (!data.apiKey) {
      showInfo(t("validation.api_key_required"));
      els.wizardApiKey.focus();
      return false;
    }
  }

  if (step === 2 && data.telegramEnabled) {
    if (!data.telegramToken) {
      showInfo(t("validation.telegram_token_required"));
      els.wizardTelegramToken.focus();
      return false;
    }
    if (parseIdList(data.telegramAllowFrom).length === 0) {
      showInfo(t("validation.telegram_allow_required"));
      els.wizardTelegramAllowFrom.focus();
      return false;
    }
  }

  return true;
}

async function createAgentFromWizard() {
  if (wizardState.submitting) {
    return;
  }
  if (!validateWizardStep(2)) {
    return;
  }

  wizardState.submitting = true;
  lockWizardButtons(true);

  try {
    const data = collectWizardData();
    const created = await api.createAgent(data.agentName);
    const loaded = await api.loadConfig(created.id);
    const nextCfg = applyQuickDataToConfig(ensureConfigRoots(safeClone(loaded)), data);
    await api.saveConfig(created.id, nextCfg);
    await api.startAgent(created.id);

    closeCreateWizard();

    state.selectedAgentId = created.id;
    await refreshAgents(true);
    await selectAgent(created.id);
    setTab("dashboard");

    showInfo(t("msg.agent_created_started"));
  } catch (error) {
    showError(error);
  } finally {
    wizardState.submitting = false;
    lockWizardButtons(false);
  }
}

function bindEvents() {
  els.minimizeWindowBtn.addEventListener("click", async () => {
    try {
      await api.minimizeWindow();
    } catch (error) {
      showError(error);
    }
  });

  els.closeWindowBtn.addEventListener("click", async () => {
    try {
      await api.closeWindow();
    } catch (error) {
      showError(error);
    }
  });

  els.tabs.forEach((tab) => {
    tab.addEventListener("click", () => setTab(tab.dataset.tab));
  });

  els.quickConfigTabBtn.addEventListener("click", () => setConfigView("quick"));
  els.fullConfigTabBtn.addEventListener("click", () => setConfigView("full"));

  els.createAgentBtn.addEventListener("click", () => openCreateWizard());

  els.importBackupBtn.addEventListener("click", async () => {
    const preferred = window.prompt(t("prompt.optional_name_after_import"), "");
    try {
      const imported = await api.importBackup(preferred || "");
      if (imported && imported.id) {
        state.selectedAgentId = imported.id;
        await refreshAgents(true);
        await selectAgent(imported.id);
      }
    } catch (error) {
      showError(error);
    }
  });

  els.refreshAgentsBtn.addEventListener("click", async () => {
    try {
      await refreshAgents(true);
    } catch (error) {
      showError(error);
    }
  });

  els.renameAgentBtn.addEventListener("click", async () => {
    const selected = ensureSelectedAgent();
    if (!selected) {
      return;
    }
    const name = window.prompt(t("prompt.new_agent_name"), selected.meta.name || selected.id);
    if (name === null) {
      return;
    }
    try {
      await api.renameAgent(selected.id, name);
      await refreshAgents(true);
      renderSelectedTitle();
      renderQuickConfig();
    } catch (error) {
      showError(error);
    }
  });

  els.openAgentFolderBtn.addEventListener("click", async () => {
    const selected = ensureSelectedAgent();
    if (!selected) {
      return;
    }
    try {
      await api.openAgentFolder(selected.id);
    } catch (error) {
      showError(error);
    }
  });

  els.deleteAgentBtn.addEventListener("click", async () => {
    const selected = ensureSelectedAgent();
    if (!selected) {
      return;
    }
    const yes = window.confirm(t("confirm.delete_agent", { name: selected.meta.name || selected.id }));
    if (!yes) {
      return;
    }
    try {
      await api.deleteAgent(selected.id);
      state.selectedAgentId = "";
      await refreshAgents(false);
      await loadConfig();
      await refreshLogs();
      await refreshBackups();
    } catch (error) {
      showError(error);
    }
  });

  els.importConfigBtn.addEventListener("click", async () => {
    const selected = ensureSelectedAgent();
    if (!selected) {
      return;
    }
    try {
      const out = await api.importConfig(selected.id);
      if (out) {
        showInfo(t("msg.config_imported"));
        await refreshAgents(true);
        await loadConfig();
      }
    } catch (error) {
      showError(error);
    }
  });

  els.exportConfigBtn.addEventListener("click", async () => {
    const selected = ensureSelectedAgent();
    if (!selected) {
      return;
    }
    try {
      const out = await api.exportConfig(selected.id);
      if (out) {
        showInfo(t("msg.config_exported", { path: out.filePath }));
      }
    } catch (error) {
      showError(error);
    }
  });

  els.reloadConfigBtn.addEventListener("click", () => loadConfig());
  els.saveQuickConfigBtn.addEventListener("click", () => saveQuickConfig());
  els.saveConfigBtn.addEventListener("click", () => saveConfig());
  els.refreshLogsBtn.addEventListener("click", () => refreshLogs());

  els.clearLogsBtn.addEventListener("click", async () => {
    const selected = ensureSelectedAgent();
    if (!selected) {
      return;
    }
    if (!window.confirm(t("confirm.clear_logs"))) {
      return;
    }
    try {
      await api.clearLogs(selected.id);
      await refreshLogs();
    } catch (error) {
      showError(error);
    }
  });

  els.createBackupBtn.addEventListener("click", async () => {
    const selected = ensureSelectedAgent();
    if (!selected) {
      return;
    }
    try {
      await api.createBackup(selected.id);
      showInfo(t("msg.backup_created"));
      await refreshBackups();
    } catch (error) {
      showError(error);
    }
  });

  els.exportBackupBtn.addEventListener("click", async () => {
    const selected = ensureSelectedAgent();
    if (!selected) {
      return;
    }
    try {
      const out = await api.exportBackup(selected.id);
      if (out) {
        showInfo(t("msg.backup_exported", { path: out.filePath }));
      }
      await refreshBackups();
    } catch (error) {
      showError(error);
    }
  });

  els.saveSettingsBtn.addEventListener("click", () => {
    saveSettingsAction();
  });

  if (els.settingLanguage) {
    els.settingLanguage.addEventListener("change", () => {
      state.settings.language = normalizeLanguage(els.settingLanguage.value);
      rerenderLocalizedUI();
    });
  }

  els.wizardCancelBtn.addEventListener("click", () => {
    if (!wizardState.submitting) {
      closeCreateWizard();
    }
  });

  els.wizardPrevBtn.addEventListener("click", () => {
    if (!wizardState.submitting) {
      setWizardStep(1);
    }
  });

  els.wizardNextBtn.addEventListener("click", () => {
    if (wizardState.submitting) {
      return;
    }
    if (!validateWizardStep(1)) {
      return;
    }
    setWizardStep(2);
  });

  els.wizardSubmitBtn.addEventListener("click", () => {
    createAgentFromWizard();
  });

  els.createWizardModal.addEventListener("click", (event) => {
    if (event.target === els.createWizardModal && !wizardState.submitting) {
      closeCreateWizard();
    }
  });

  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape" && wizardState.open && !wizardState.submitting) {
      closeCreateWizard();
    }
  });
}

async function boot() {
  bindEvents();
  state.appInfo = await api.init();
  if (state.appInfo && state.appInfo.settings) {
    state.settings = {
      closeBehavior: state.appInfo.settings.closeBehavior || "ask",
      language: normalizeLanguage(state.appInfo.settings.language)
    };
  }
  applyStaticI18n();
  renderRuntimeInfo();
  await loadSettings();
  setConfigView("quick");

  await refreshAgents(false);
  if (state.selectedAgentId) {
    await selectAgent(state.selectedAgentId);
  } else {
    await loadConfig();
    await refreshLogs();
    await refreshBackups();
  }

  if (logsAutoRefreshTimer) {
    clearInterval(logsAutoRefreshTimer);
  }
  logsAutoRefreshTimer = window.setInterval(() => {
    if (state.selectedTab !== "logs" || !state.selectedAgentId) {
      return;
    }
    refreshLogs().catch(() => {});
  }, 500);

  window.addEventListener("beforeunload", () => {
    if (logsAutoRefreshTimer) {
      clearInterval(logsAutoRefreshTimer);
    }
  });
}

boot().catch((error) => {
  showError(error);
});


