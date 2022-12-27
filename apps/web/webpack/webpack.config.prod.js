const { merge } = require('webpack-merge');
const base = require('./webpack.config.base');
const prod = require('../../../config/webpack/webpack.config.prod');

module.exports = merge(base, prod, {});
