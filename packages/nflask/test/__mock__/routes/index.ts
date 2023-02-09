import { Router } from '@nflask';
import routerV1 from '../controllers/v1';
import routerV2 from '../controllers/v2';

// 统一添加路由 /api 前缀
const router = new Router({
    prefix: '/api',
});

router.use('/v1', routerV1.routes());
router.use('/v2', routerV2.routes());

export default router;
