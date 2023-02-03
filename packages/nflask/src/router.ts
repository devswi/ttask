import KoaRouter, { RouterOptions, RouterContext as Context, Middleware } from '@koa/router';
import { loadControllerClasses } from './utils/load';
import { RESERVED_METHODS } from './constants';

interface LoadOptions {
    recursive?: boolean;
    ignore?: string[];
}

const handleLoadDir = (router: Router, dir: string, options: LoadOptions) => {
    loadControllerClasses(dir, options).forEach(c => router.map(c, options));
};

const handleMap = (router: Router, DecoratedClass: any, _optinos: LoadOptions) => {
    if (!DecoratedClass) return;
    const basePath = DecoratedClass.basePath;
    if (basePath) router.prefix(basePath);

    const staticMethods = Object.getOwnPropertyNames(DecoratedClass)
        .filter(method => !RESERVED_METHODS.includes(method))
        .map(method => DecoratedClass[method]);

    const DecoratedClassPrototype = DecoratedClass.prototype;
    const methods = Object.getOwnPropertyNames(DecoratedClassPrototype)
        .filter(method => !RESERVED_METHODS.includes(method))
        .map(method => DecoratedClassPrototype[method]);

    [...staticMethods, ...methods]
        .filter(item => {
            const { method, path } = item;
            return path && method;
        })
        .forEach(item => {
            let baseMiddlewares: Middleware[] = DecoratedClass.middlewares ?? [];
            const { method, path, middlewares } = item;
            (router as any)[method](path, ...baseMiddlewares, ...middlewares);
        });
};

class Router extends KoaRouter {
    constructor(options: RouterOptions = {}) {
        super(options);
    }

    map(DecoratedClass: any, options: LoadOptions = {}) {
        handleMap(this, DecoratedClass, options);
    }

    load(dir: string, options: LoadOptions = {}) {
        handleLoadDir(this, dir, options);
    }
}

export type { RouterOptions, LoadOptions, Context as RouterContext };
export { Router as default };
