import { Controller, Get, Post, RouterContext } from '@swizm/nflask';
import koaBody from 'koa-body';
import { prisma } from '../../prisma';

@Controller('/user')
class User {
    @Post('/', koaBody())
    async createNewUser(ctx: RouterContext) {
        const body = ctx.request.body;
        if (body) {
            const { name, email }: { name?: string; email: string } = ctx.request.body;
            const user = await prisma.user.create({
                data: {
                    name,
                    email,
                },
            });
            ctx.body = user;
            return;
        }
        ctx.status = 400;
        ctx.body = {
            msg: 'incorrect field',
        };
    }

    @Get('/:id')
    async getUserById(ctx: RouterContext) {
        const { id } = ctx.params;
        const user = await prisma.user.findUnique({
            where: {
                id: Number(id),
            },
        });
        ctx.body = user;
    }
}

export default User;
