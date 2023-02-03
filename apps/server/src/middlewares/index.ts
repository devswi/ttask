import { Next } from 'koa';
import { RouterContext } from '@koa/router';

async function setResponseTime(ctx: RouterContext, next: Next) {
    const date = new Date();
    await next();
    ctx.set('X-Response-Time', String(new Date().getTime() - date.getTime()));
}

export { setResponseTime };
