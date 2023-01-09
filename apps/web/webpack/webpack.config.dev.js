const { merge } = require('webpack-merge');
const generateDevConfig = require('../../../config/webpack/webpack.config.dev');

module.exports = async () => {
    const dev = await generateDevConfig();
    return merge(dev, {
        resolve: {
            alias: {},
        },
    });
};
