const path = require('path');
const HTMLWebpackPlugin = require('html-webpack-plugin');
const TsconfigPathsPlugin = require('tsconfig-paths-webpack-plugin');
const { APP_PATH } = require('./constants');

module.exports = {
    output: {
        path: path.join(APP_PATH, './dist'),
        clean: true,
    },
    plugins: [
        new HTMLWebpackPlugin({
            template: './public/index.html',
        }),
    ],
    resolve: {
        modules: [APP_PATH, 'node_modules'],
        extensions: ['.js', '.ts', '.tsx'],
        plugins: [new TsconfigPathsPlugin()],
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
            {
                test: /\.css/,
                use: [
                    require.resolve('style-loader'),
                    require.resolve('css-loader'),
                    require.resolve('postcss-loader'),
                ],
            },
            {
                test: /\.(png|jpe?g|gif|svg|webp)$/,
                type: 'asset',
                generator: {
                    filename: 'static/images/[hash:8][ext]',
                },
                parser: {
                    dataUrlCondition: {
                        maxSize: 4 * 1024, // 4kb
                    },
                },
            },
            {
                test: /\.(eot|ttf|otf|woff2?)$/i,
                type: 'asset',
                generator: {
                    filename: 'static/fonts/[name][hash:8][ext]',
                },
            },
        ],
    },
};
