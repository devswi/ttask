const path = require('path');
const HTMLWebpackPlugin = require('html-webpack-plugin');

const isDevelopment = process.env.NODE_ENV === 'development';

module.exports = {
    mode: isDevelopment ? 'development' : 'production',
    entry: './index.tsx',
    output: {
        filename: '[name].[contenthash].js',
        path: path.resolve(__dirname, '../dist'),
    },
    plugins: [
        new HTMLWebpackPlugin({
            template: './public/index.html',
        }),
    ],
    resolve: {
        modules: [__dirname, 'src', 'node_modules'],
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
