const { merge } = require('webpack-merge');
const generateProdConfig = require('../../../config/webpack/webpack.config.prod');

module.exports = async () => {
    const prod = await generateProdConfig();
    return merge(prod, {});
};
