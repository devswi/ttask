const { merge } = require('webpack-merge');
const entry = require('./webpack.entry');
const prod = require('../../../config/webpack/webpack.config.prod');

module.exports = merge(prod, entry, {});
