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
                    status: 'pending',
                },
                {
                    id: 'bbbb',
                    title: 'Reactjs learning',
                    status: 'pending',
                },
                {
                    id: 'cccc',
                    title: 'Skip adding books',
                    status: 'pending',
                },
                {
                    id: 'dddd',
                    title: 'try to submit castle',
                    status: 'pending',
                },
                {
                    id: 'eeeee',
                    title: 'help buy milk',
                    status: 'pending',
                },
                {
                    id: 'ffff',
                    title: 'pretend to fix distant relatives',
                    status: 'pending',
                },
            ],
        };
        ctx.status = 200;
    }
}

export default Todos;
