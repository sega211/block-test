# Тест применения библиотеки i18n

## Описание

В проекте реализован динамический перевод контента при помощи билиотеки i18n

## Установка

### Предварительные условия

Убедитесь, что у вас установлены следующие инструменты:

- [Node.js](https://nodejs.org/) (рекомендуется последняя версия LTS)
- [npm](https://www.npmjs.com/) (обычно устанавливается вместе с Node.js)

### Установка зависимостей

1. Клонируйте репозиторий:

   ```bash
   git clone https://github.com/sega211/block-test.git

2. Перейдите в дерикторию проекта

3. Установите необходимые зависимости
```bash
npm install --save-dev webpack webpack-cli webpack-merge css-loader style-loader sass-loader mini-css-extract-plugin html-webpack-plugin clean-webpack-plugin terser-webpack-plugin
```
## Структура проекта

название-проекта/
├── dist/                  # Скомпилированный код для production
├── src/                   # Исходный код для разработки
│   ├── js/
│   │   ├── pages/
│   │   │   ├── home.js
│   │   │   └── single.js
│   │   ├── header.js
│   │   ├── footer.js
│   │   └── i18n-updater.js
│   ├── scss/
│   │   ├── main.scss
│   │   ├── home.scss
│   │   └── single.scss
│   ├── partials/
│   │   ├── header.html
│   │   └── footer.html
│   ├── assets/
│   │   ├── images/
│   │   └── icons/
│   └── index.html
├── webpack.common.js      # Общие настройки Webpack
├── webpack.dev.js        # Настройки Webpack для development
├── webpack.prod.js       # Настройки Webpack для production
├── package.json
├── package-lock.json
└── readme.md

### Используемые библиотеки и инструменты

    Webpack: Модульный сборщик для современных JavaScript приложений.
        webpack: Основной пакет.
        webpack-cli: Интерфейс командной строки для Webpack.
        webpack-merge: Инструмент для объединения конфигураций Webpack.
    Загрузчики:
        css-loader: Загрузчик для CSS файлов.
        style-loader: Вставляет CSS в DOM.
        sass-loader: Преобразует SCSS в CSS.
        html-loader: Загружает HTML файлы.
    Плагины:
        mini-css-extract-plugin: Извлекает CSS в отдельные файлы.
        html-webpack-plugin: Создает HTML файлы из шаблонов.
        clean-webpack-plugin: Очищает папку dist перед сборкой.
        terser-webpack-plugin: Минифицирует JavaScript.
    Другие инструменты:
        i18next: Библиотека для интернационализации.
        copy-webpack-plugin: Копирует файлы и папки в сборку.

## Демо

Сайт доступен по адресу: https://mnogodeto4ka/landings/multilang


