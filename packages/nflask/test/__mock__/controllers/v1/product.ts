import { Controller, Delete, Get, RouterContext, Post, Put } from '@nflask';
import koaBody from 'koa-body';
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

    @Get('/produced')
    async getProductPrduced(ctx: RouterContext) {
        ctx.body = {
            objects: ['2023-01-01', '2023-01-02'],
        };
    }

    @Get('/:id')
    async getProduct(ctx: RouterContext) {
        const productId = ctx.params.id;
        ctx.body = {
            msg: `fetch product with id ${productId}`,
            product_id: productId,
        };
    }

    @Post('/', koaBody())
    async createProduct(ctx: RouterContext) {
        const body = ctx.request.body;
        if (body) {
            const { product_name: name, price } = body;
            if (name && price) {
                ctx.body = {
                    msg: `create product`,
                    name,
                    price,
                };
                return;
            }
        }
        ctx.status = 400;
        ctx.body = {
            msg: 'incorrect field',
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
