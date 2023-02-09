import _path from 'path';
import glob from 'glob';

const toString = Function.prototype.toString;

// https://github.com/miguelmota/is-class/blob/master/is-class.js
function isClass(fn: any) {
    if (typeof fn !== 'function') {
        return false;
    }
    if (/^class[\s{]/.test(toString.call(fn))) {
        return true;
    }
    return false;
}

const getFilePaths = (dir: string, recursive: boolean, ignore: string[]) => {
    const regex = recursive ? '**/*.[t|j]s' : '*.[t|j]s';
    const paths = glob.sync(regex, {
        cwd: dir,
        ignore,
    });
    return paths.map(path => _path.join(dir, path));
};

const loadModule = (filepath: string) => {
    const obj = require(filepath);
    if (obj.__esModule) return 'default' in obj ? obj.default : obj;
    return obj;
};

const loadClass = (filepath: string) => {
    const cls = loadModule(filepath);
    if (isClass(cls)) return cls;
    return false;
};

const loadControllerClasses = (
    dir: string,
    options: { recursive?: boolean; ignore?: string[] },
) => {
    dir = _path.resolve(dir);
    const { recursive = true, ignore = [] } = options;
    return getFilePaths(dir, recursive, ignore)
        .map(filepath => loadClass(filepath))
        .filter(cls => cls);
};

export { loadControllerClasses };
