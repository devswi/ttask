import { Router } from '@nflask';

const router = new Router();
router.load(__dirname, {
    recursive: false,
});

export default router;
