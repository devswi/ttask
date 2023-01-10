const { merge } = require('webpack-merge');
const generateBaseConfig = require('./webpack.base');

module.exports = async () => {
    const base = await generateBaseConfig();
    return merge(base, {
        mode: 'production',
        output: {
            filename: 'static/chunks/[name].[contenthash:8].bundle.js',
        },
        optimization: {},
    });
};
