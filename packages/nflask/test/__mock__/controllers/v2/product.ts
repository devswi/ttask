import { Controller, Get, RouterContext } from '@nflask';

@Controller('/products')
class Product {
    @Get('/')
    async getAllProducts(ctx: RouterContext) {
        ctx.body = {
            msg: 'fetch products',
        };
    }
}

export default Product;
