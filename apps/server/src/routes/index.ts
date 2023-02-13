import { Router } from '@swizm/nflask';
import routerV1 from '../controllers/v1';

// 统一添加路由 /api 前缀
const router = new Router({
    prefix: '/api',
});

router.use('/v1', routerV1.routes());

export default router;
