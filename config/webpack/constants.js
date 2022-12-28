const path = require('path');

const APP_PATH = process.cwd();
const PUBLIC_PATH = path.join(APP_PATH, './public');

module.exports = {
    APP_PATH,
    PUBLIC_PATH,
};
