const { merge } = require('webpack-merge');
const base = require('./webpack.base');

module.exports = merge(base, {
    mode: 'production',
    output: {
        filename: '[name].[contenthash].bundle.js',
    },
});
