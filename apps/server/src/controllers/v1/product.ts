import { Controller, Delete, Get, RouterContext, Post, Put } from '@swizm/nflask';
import { setResponseTime } from '../../middlewares';

@Controller('/products')
class Product {
    @Get('/', setResponseTime)
    static async getProducts(ctx: RouterContext) {
        ctx.body = {
            msg: 'fetch products',
        };
        ctx.status = 200;
    }

    @Get('/:id')
    async getProduct(ctx: RouterContext) {
        ctx.body = {
            msg: `fetch product with id ${ctx.params.id}`,
        };
    }

    @Post('/')
    async createProduct(ctx: RouterContext) {
        ctx.body = {
            msg: `create product`,
        };
    }

    @Delete('/:id')
    async deleteProduct(ctx: RouterContext) {
        ctx.body = {
            msg: `delete product with id ${ctx.params.id}`,
        };
    }

    @Put('/:id')
    async updateProduct(ctx: RouterContext) {
        ctx.body = {
            msg: `upgrade product with id ${ctx.params.id}`,
        };
    }
}

export default Product;
