const { merge } = require('webpack-merge');
const base = require('../../../config/webpack/webpack.config.base');

module.exports = merge(base, {
    entry: './index.tsx',
});
