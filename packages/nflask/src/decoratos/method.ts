import { Middleware } from '@koa/router';

type RouterPath = string | RegExp | (string | RegExp)[];

const handleHttpMethod = (
    path: RouterPath,
    method: 'get' | 'post' | 'delete' | 'put' | 'head' | 'options' | 'patch',
    ...middlewares: Middleware[]
) => {
    return (target: any, name: string, descriptor: PropertyDescriptor) => {
        descriptor.value.method = method;
        descriptor.value.path = path;
        descriptor.value.middlewares = [...middlewares, target[name]];
        return descriptor;
    };
};

/**
 * Http get method
 */
function Get(path: RouterPath, ...middlewares: Middleware[]) {
    return handleHttpMethod(path, 'get', ...middlewares);
}

/**
 * Http post method
 */
function Post(path: RouterPath, ...middlewares: Middleware[]) {
    return handleHttpMethod(path, 'post', ...middlewares);
}

/**
 * Http delete method
 */
function Delete(path: RouterPath, ...middlewares: Middleware[]) {
    return handleHttpMethod(path, 'delete', ...middlewares);
}

/**
 * Http put method
 */
function Put(path: RouterPath, ...middlewares: Middleware[]) {
    return handleHttpMethod(path, 'put', ...middlewares);
}

/**
 * Http head method
 */
function Head(path: RouterPath, ...middlewares: Middleware[]) {
    handleHttpMethod(path, 'head', ...middlewares);
}

/**
 * Http options method
 */
function Options(path: RouterPath, ...middlewares: Middleware[]) {
    handleHttpMethod(path, 'options', ...middlewares);
}

/**
 * Http patch method
 */
function Patch(path: string, ...middlewares: Middleware[]) {
    handleHttpMethod(path, 'patch', ...middlewares);
}

export { Get, Post, Delete, Put, Head, Options, Patch };
