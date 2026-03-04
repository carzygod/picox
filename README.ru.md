<div align="center">
  <a href="./README.md"><kbd>English (Default)</kbd></a>
  <a href="./README.zh-CN.md"><kbd>简体中文</kbd></a>
  <a href="./README.ru.md"><kbd>Русский</kbd></a>
</div>

<br />

<div align="center">
  <img src="./docs/images/logo.png" alt="picox logo" width="128" />
</div>

<div align="center">
  <img src="./docs/images/banner.png" alt="picox desktop banner" width="100%" />
</div>

# picox CLI Desktop

picox CLI Desktop — это настольный GUI на Electron, который превращает однобинарный runtime `picox` в удобную панель управления несколькими агентами.

Проект сохраняет гибкость CLI, но делает ежедневные операции проще: создание и запуск агентов, редактирование конфигурации, просмотр логов, резервные копии и фоновая работа через трей.

## Возможности

### 1. Управление жизненным циклом нескольких агентов

- Создание, переименование, удаление, запуск и остановка агентов
- Изолированные данные для каждого агента:
  - `config.json`
  - `workspace/`
  - `logs/runtime.log`
  - `meta.json`

### 2. Мастер создания агента

- Шаг 1: имя агента и настройки модели (`model alias`, `model name`, `api_base`, `api_key`)
- Шаг 2: настройки Telegram (`enabled`, `bot token`, `allow_from`)
- Кнопка `Create & Start` автоматически:
  - создает структуру агента
  - записывает `config.json`
  - запускает gateway-процесс

### 3. Два режима редактирования конфигурации

- `Quick Config`: форма для основных параметров
- `Full Config`: полный рекурсивный JSON-редактор
- Поддержка импорта и экспорта конфигурации

### 4. Логи и бэкапы

- Обновление логов в реальном времени (polling 0.5 сек)
- Очистка логов из UI
- Создание/экспорт/импорт/восстановление бэкапов
- Восстановление бэкапа как нового агента

### 5. UX для долгой фоновой работы

- Безрамочное окно с кастомными кнопками
- Настраиваемое поведение при закрытии:
  - спрашивать каждый раз
  - свернуть в трей
  - сразу выйти
- Поддержка системного трея:
  - быстрый возврат к панели
  - быстрый выход

## Скриншоты

### Главная панель

![Main Console](./docs/images/main.png)

### Настройки и конфигурация

![Settings Panel](./docs/images/setting.png)

## Технологии

- Electron (main / preload / renderer)
- HTML + CSS + Vanilla JavaScript
- Node.js (файловая система и процессы)
- IPC через `contextBridge` + `ipcRenderer.invoke`
- Сборка через `electron-builder` (Windows / macOS)

## Архитектура

### Main process (`src/main`)

- Жизненный цикл окна и политика закрытия
- Трей и контекстное меню
- Запуск/остановка процессов агента
- Операции с файлами конфигурации, логов и бэкапов
- IPC-обработчики для renderer

### Preload (`src/preload`)

- Безопасный API для renderer:
  - инициализация и настройки
  - CRUD агентов и управление процессами
  - операции с config/log/backup
  - открытие папки и управление окном

### Renderer (`src/renderer`)

- UI с вкладками:
  - Dashboard
  - Config (Quick / Full)
  - Logs
  - Backups
  - Settings
- Мастер создания и JSON-редактор
- Синхронизация состояния и автообновление логов

## Размещение бинарника

Поместите собранный бинарник `picox` в:

- `resources/bin/picox-windows-amd64.exe` (Windows x64)
- `resources/bin/picox-darwin-amd64` (macOS Intel)
- `resources/bin/picox-darwin-arm64` (macOS Apple Silicon)

## Быстрый старт

1. Установите зависимости:

```bash
npm install
```

2. Положите нужный бинарник `picox` в `resources/bin/`

3. Запустите dev-режим:

```bash
npm run dev
```

## Сборка

- Локальная распакованная сборка:

```bash
npm run pack
```

- Windows installer (NSIS):

```bash
npm run dist:win
```

- Windows portable:

```bash
npm run dist:win:portable
```

- Windows installer + portable:

```bash
npm run dist:win:all
```

- macOS DMG:

```bash
npm run dist:mac
```

## Runtime-данные и бэкапы

Корень runtime:

- `<userData>/runtime/`

Каталог агентов:

- `<userData>/runtime/agents/<agent-id>/`

Каталог бэкапов:

- `<userData>/runtime/backups/`

Такая структура упрощает перенос между машинами и восстановление после сбоев.

## Практическая польза

- Меньше ручных CLI-операций
- Меньше ошибок конфигурации благодаря мастеру и Quick Config
- Полная гибкость через Full Config JSON-редактор
- Быстрая диагностика через near real-time логи
- Более безопасная эксплуатация через импорт/экспорт бэкапов
- Непрерывная работа агентов в фоне через трей

## License

MIT
