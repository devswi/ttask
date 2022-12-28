const { PUBLIC_PATH } = require('./constants');

module.exports = {
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
};
