const { merge } = require('webpack-merge');
const NodemonPlugin = require('nodemon-webpack-plugin');
const base = require('./webpack.base');

module.exports = merge(base, {
    mode: 'development',
    watch: true,
    plugins: [new NodemonPlugin()],
    resolve: {
        alias: {},
    },
});
