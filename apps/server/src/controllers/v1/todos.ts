import { Controller, Get, RouterContext } from '@swizm/nflask';

@Controller('/todos')
class Todos {
    @Get('/')
    async getAllTodos(ctx: RouterContext) {
        ctx.body = {
            objects: [
                {
                    id: 'aaaa',
                    title: 'Go shopping',
                    status: 0,
                    priority: 'low',
                },
                {
                    id: 'bbbb',
                    title: 'Reactjs learning',
                    status: 0,
                    priority: 'medium',
                },
                {
                    id: 'cccc',
                    title: 'Skip adding books',
                    status: 1,
                    priority: 'medium',
                },
                {
                    id: 'dddd',
                    title: 'Try to submit castle',
                    status: 1,
                    priority: 'high',
                },
                {
                    id: 'eeeee',
                    title: 'Help buy milk',
                    status: 2,
                    priority: 'urgent',
                },
                {
                    id: 'ffff',
                    title: 'Pretend to fix distant relatives',
                    status: 2,
                },
            ],
        };
        ctx.status = 200;
    }
}

export default Todos;
