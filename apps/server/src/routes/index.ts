import Router from '@koa/router';
import routerV1 from './v1';

// 统一添加路由 /api 前缀
const router = new Router({
    prefix: '/api',
});

router.use('/v1', routerV1.routes(), routerV1.allowedMethods());

export default router;
