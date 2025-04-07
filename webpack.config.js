const path = require('path');
const fs = require('fs');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const webpack = require('webpack'); // Добавлено
const CopyWebpackPlugin = require('copy-webpack-plugin');

// Функция для вставки частичных шаблонов
const compileTemplate = (templatePath) => {
    let template = fs.readFileSync(templatePath, 'utf8');
    const header = fs.readFileSync(path.resolve(__dirname, 'src/partials/header.html'), 'utf8');
    const footer = fs.readFileSync(path.resolve(__dirname, 'src/partials/footer.html'), 'utf8');

    return template
        .replace('<!-- HEADER -->', header)
        .replace('<!-- FOOTER -->', footer);
};

module.exports = {
    mode: 'development',
    entry: {
        home: './src/js/pages/home.js',
        single: './src/js/pages/single.js'
    },
    output: {
        filename: 'js/[name].[contenthash].js',
        path: path.resolve(__dirname, 'dist'),
        clean: true,
        publicPath: '/', // Добавлено для корректных путей
        assetModuleFilename: 'assets/[hash][ext][query]'
    },
    module: {
        rules: [
            {
                test: /\.html$/,
                exclude: /partials/,
                use: 'html-loader'
            },
            {
                test: /\.scss$/,
                use: [
                    MiniCssExtractPlugin.loader,
                    'css-loader',
                    'sass-loader'
                ]
            },
            {
                test: /\.(png|svg|jpg|jpeg|gif|woff2?)$/i,
                type: 'asset/resource',
                generator: {
                    filename: 'assets/[hash][ext][query]'
                }
            }
        ]
    },
    plugins: [
        // Глобальные переменные
        new webpack.ProvidePlugin({
            i18n: path.resolve(__dirname, 'src/js/i18n.js')
        }),

        // Главная страница
        new HtmlWebpackPlugin({
            templateContent: compileTemplate('./src/index.html'),
            filename: 'index.html',
            chunks: ['home'],
            inject: 'body'
        }),

        // Страница single
        new HtmlWebpackPlugin({
            templateContent: compileTemplate('./src/single.html'),
            filename: 'single.html',
            chunks: ['single'],
            inject: 'body'
        }),

        // Извлечение CSS
        new MiniCssExtractPlugin({
            filename: 'css/[name].[contenthash].css'
        }),

        new CopyWebpackPlugin({
            patterns: [
                { from: 'src/assets/icons', to: 'assets/icons' },
                { from: 'src/assets/images', to: 'assets/images' }
            ]
        }),
    ],
    devServer: {
        static: {
            directory: path.join(__dirname, 'dist'),
        },
        hot: true,
        open: true,
        historyApiFallback: true // Для SPA
    },
    resolve: {
        extensions: ['.js', '.json'] // Добавлено
    }
};