const { merge } = require('webpack-merge');
const entry = require('./webpack.entry');
const dev = require('../../../config/webpack/webpack.config.dev');

module.exports = merge(dev, entry, {
    resolve: {
        alias: {},
    },
});
