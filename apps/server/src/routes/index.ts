import { Context } from 'koa';
import Router from '@koa/router';

// 统一添加路由 /api 前缀
const router = new Router({
    prefix: '/api',
});

router.get('/', (ctx: Context) => {
    ctx.body = {
        greeting: 'Hello world',
    };
    ctx.status = 200;
});

export default router;
