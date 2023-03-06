import { Controller, Get, RouterContext } from '@nflask';

@Controller('/user')
class User {
    @Get('/')
    static async getAllUsers(ctx: RouterContext) {
        ctx.body = {
            msg: 'fetch products',
        };
        ctx.status = 200;
    }
}

export default User;
