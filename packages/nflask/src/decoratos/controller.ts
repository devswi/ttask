import { Middleware } from '@koa/router';

/**
 * Controller Decorator
 * @param basePath -
 * @returns
 */
function Controller(basePath: string, ...middlewares: Middleware[]) {
    return (target: any) => {
        target.basePath = basePath;
        target.middlewares = middlewares;
    };
}

export { Controller };
