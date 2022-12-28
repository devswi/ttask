const { appName } = require('config');

const APP_PATH = process.cwd();
const PUBLIC_PATH = `/${appName}/`;

module.exports = {
    APP_PATH,
    PUBLIC_PATH,
};
