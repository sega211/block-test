// webpack.prod.js

const path = require('path');
const fs = require('fs');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const TerserPlugin = require('terser-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const webpack = require('webpack');

// Функция для вставки частичных шаблонов
const compileTemplate = (templatePath, params) => {
    let template = fs.readFileSync(templatePath, 'utf8');
    const header = fs.readFileSync(path.resolve(__dirname, 'src/partials/header.html'), 'utf8');
    const footer = fs.readFileSync(path.resolve(__dirname, 'src/partials/footer.html'), 'utf8');

    return template
        .replace(/<!--\s*HEADER\s*-->/, header)
        .replace(/<!--\s*FOOTER\s*-->/, footer);
        
};

module.exports = {
    mode: 'production',
    entry: {
        home: './src/js/pages/home.js',
        single: './src/js/pages/single.js'
    },
    output: {
        filename: 'js/[name].[contenthash].js',
        path: path.resolve(__dirname, 'dist'),
        clean: true,
        publicPath: '/landings/multilang/', 
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
                    {
                        loader: 'css-loader',
                        options: {
                            sourceMap: false,
                            importLoaders: 1,
                            url: {
                                // Настройка для обработки url
                                // По умолчанию используется publicPath
                            }
                        }
                    },
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
        new webpack.ProvidePlugin({
            i18n: path.resolve(__dirname, 'src/js/i18n.js')
        }),
        new HtmlWebpackPlugin({
            templateContent: (templateParams) => compileTemplate('./src/index.html', templateParams),
            filename: 'index.html',
            chunks: ['home'],
            inject: 'body',
          
            minify: {
                removeComments: true,
                collapseWhitespace: true,
                removeRedundantAttributes: true,
                useShortDoctype: true
            }
        }),
        new HtmlWebpackPlugin({
            templateContent: (templateParams) => compileTemplate('./src/single.html', templateParams),
            filename: 'single.html',
            chunks: ['single'],
            inject: 'body',
          
            minify: {
                removeComments: true,
                collapseWhitespace: true,
                removeRedundantAttributes: true,
                useShortDoctype: true
            }
        }),
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
    optimization: {
        minimize: true,
        minimizer: [new TerserPlugin({
            parallel: true,
            terserOptions: {
                compress: {
                    drop_console: true,
                    drop_debugger: true
                },
                output: {
                    comments: false
                }
            }
        })],
        splitChunks: {
            chunks: 'all',
            cacheGroups: {
                vendors: {
                    test: /[\\/]node_modules[\\/]/,
                    name: 'vendors',
                    chunks: 'all'
                }
            }
        }
    },
    devtool: 'hidden-source-map',
    stats: 'errors-only',
    resolve: {
        extensions: ['.js', '.json']
    }
};
