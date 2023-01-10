const { PUBLIC_PATH } = require('./constants');
const { BundleAnalyzerPlugin } = require('webpack-bundle-analyzer');
const { merge } = require('webpack-merge');
const generateBaseConfig = require('./webpack.base');

module.exports = async () => {
    const base = await generateBaseConfig();
    const { port, analyzerPort, webpack_target: target } = require('config');
    const filename = target === 'node' ? 'server.js' : 'static/chunks/[name].bundle.js';
    return merge(base, {
        mode: 'development',
        output: {
            filename,
        },
        plugins: [
            new BundleAnalyzerPlugin({
                openAnalyzer: false,
                analyzerPort,
                logLevel: 'silent',
            }),
        ],
        devtool: 'eval-cheap-module-source-map',
        devServer: {
            static: {
                directory: PUBLIC_PATH,
            },
            allowedHosts: ['local.ttask.com'],
            port,
            client: {
                logging: 'info',
                overlay: { warnings: false, errors: true },
            },
        },
    });
};
