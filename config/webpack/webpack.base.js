const path = require('path');
const HTMLWebpackPlugin = require('html-webpack-plugin');
const { APP_PATH } = require('./constants');

module.exports = {
    output: {
        path: path.join(APP_PATH, './dist'),
    },
    plugins: [
        new HTMLWebpackPlugin({
            template: './public/index.html',
        }),
    ],
    resolve: {
        modules: [APP_PATH, 'node_modules'],
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
