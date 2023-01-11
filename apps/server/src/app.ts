import Koa, { Context, Next } from 'koa';

const app = new Koa();

const { PORT = 3000 } = process.env;

app.use(async (ctx: Context, _next: Next) => {
    ctx.body = 'Hello world';
});

app.listen(PORT, () => {
    console.log('Server running at http://localhost:', PORT);
});
