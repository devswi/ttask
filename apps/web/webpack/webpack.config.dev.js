const { merge } = require('webpack-merge');
const base = require('./webpack.config.base');
const dev = require('../../../config/webpack/webpack.config.dev');

module.exports = merge(base, dev, {});
