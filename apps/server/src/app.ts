import Koa from 'koa';
import koaBody from 'koa-body';
import cors from '@koa/cors';
import router from './routes';

const app = new Koa();
app.use(koaBody()).use(cors()).use(router.routes()).use(router.allowedMethods());

const { PORT = 3000 } = process.env;
export default app.listen(PORT, () => {
    console.log('Server running at http://localhost:', PORT);
});
