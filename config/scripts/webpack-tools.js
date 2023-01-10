const path = require('path');
const HTMLWebpackPlugin = require('html-webpack-plugin');
const fs = require('fs');

function getPages(root) {
    return path.join(root, './src/pages');
}

async function generateConfigs(dir, parent, store) {
    return fs.promises
        .stat(dir)
        .then(res => {
            if (res.isDirectory()) return fs.promises.readdir(dir);
            return [];
        })
        .then(items => {
            let newStore = store;
            // 过滤掉非目录
            const folders = items.filter(item => {
                if (/^_/.test(item)) return false;
                const res = item.match(/(.*)(\.tsx?|jsx?)$/);
                if (!res) return true;
                const [full, filename] = res;
                const chunk = parent.concat(filename).join('/');
                newStore = {
                    ...newStore,
                    [chunk]: path.join(dir, full),
                };
                return false;
            });
            if (folders.length === 0) return newStore;
            // 递归
            return folders.reduce(
                (prev, next) =>
                    prev.then(res =>
                        generateConfigs(path.join(dir, next), parent.concat(next), res || newStore),
                    ),
                Promise.resolve(),
            );
        });
}

/**
 * 动态生成 Webpack 配置
 * 包含两个部分的配置
 * 1. 根据项目 src/pages 目录下的内容动态生成 entry 配置
 * 2. 生成 HTMLWebpackPlugin 的配置
 */
async function dynamicWebpackConfig(root) {
    const res = await generateConfigs(getPages(root), [], {});
    let templates = [];
    for (const chunk of Object.keys(res)) {
        templates.push(
            new HTMLWebpackPlugin({
                template: 'public/index.html',
                filename: chunk.match(/^index|index$/) ? `${chunk}.html` : `${chunk}/index.html`,
                chunks: [chunk],
            }),
        );
    }
    return {
        entry: res,
        templates,
    };
}

module.exports = {
    dynamicWebpackConfig,
};
