const { PUBLIC_PATH } = require('./constants');
const { merge } = require('webpack-merge');
const base = require('./webpack.base');

module.exports = merge(base, {
    mode: 'development',
    output: {
        filename: '[name].bundle.js',
    },
    devServer: {
        static: {
            directory: PUBLIC_PATH,
        },
        allowedHosts: ['local.ttask.com'],
        port: 8483,
        client: {
            logging: 'info',
            overlay: { warnings: false, errors: true },
        },
    },
});
