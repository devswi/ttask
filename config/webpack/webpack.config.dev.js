const { PUBLIC_PATH } = require('./constants');
const { BundleAnalyzerPlugin } = require('webpack-bundle-analyzer');
const { merge } = require('webpack-merge');
const generateBaseConfig = require('./webpack.base');

module.exports = async () => {
    const base = await generateBaseConfig();
    return merge(base, {
        mode: 'development',
        output: {
            filename: '[name].bundle.js',
        },
        plugins: [
            new BundleAnalyzerPlugin({
                openAnalyzer: false,
                analyzerPort: 8001,
                logLevel: 'silent',
            }),
        ],
        devtool: 'eval-cheap-module-source-map',
        devServer: {
            static: {
                directory: PUBLIC_PATH,
            },
            allowedHosts: ['local.ttask.com'],
            port: 8484,
            client: {
                logging: 'info',
                overlay: { warnings: false, errors: true },
            },
        },
    });
};
