import Koa from 'koa';
import router from './routes';
import koaBody from 'koa-body';

const app = new Koa();

const { PORT = 3000 } = process.env;

app.use(koaBody())
    .use(router.routes())
    .use(router.allowedMethods())
    .listen(PORT, () => {
        console.log('Server running at http://localhost:', PORT);
    });
