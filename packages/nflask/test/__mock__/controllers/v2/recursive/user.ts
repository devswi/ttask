import { Controller, Get, RouterContext } from '@nflask';

@Controller('/user')
class User {
    @Get('/')
    async getUserInfo(ctx: RouterContext) {
        ctx.body = {
            msg: 'fetch user',
        };
    }
}

export default User;
