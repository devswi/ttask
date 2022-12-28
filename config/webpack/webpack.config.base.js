const path = require('path');
const HTMLWebpackPlugin = require('html-webpack-plugin');
const { APP_PATH, PUBLIC_PATH } = require('./constants');

module.exports = {
    output: {
        filename: '[name].[contenthash].bundle.js',
        path: path.join(APP_PATH, './dist'),
        publicPath: PUBLIC_PATH,
    },
    plugins: [
        new HTMLWebpackPlugin({
            template: './public/index.html',
        }),
    ],
    resolve: {
        modules: [APP_PATH, 'src', 'node_modules'],
        extensions: ['.js', '.ts', '.tsx'],
    },
    module: {
        rules: [
            {
                test: /\.(ts|tsx)$/,
                exclude: /node_modules/,
                loader: require.resolve('babel-loader'),
                options: {
                    cacheDirectory: true,
                    rootMode: 'upward',
                },
            },
        ],
    },
};
