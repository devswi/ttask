import server from '../__mock__/app';
import request from 'supertest';

afterAll(() => {
    server.close();
});

describe('HTTP API Generation', () => {
    it('GET /api/v1/products should return 200', done => {
        request(server)
            .get('/api/v1/products')
            .expect(200)
            .end(err => {
                if (err) return done(err);
                done();
            });
    });
    it('Get /api/v1/products/:id should return data with product_id in path', done => {
        const id = 'aaaaa';
        request(server)
            .get(`/api/v1/products/${id}`)
            .expect(200)
            .expect((res: { body: { product_id: string } }) => {
                expect(res.body.product_id === id);
            })
            .end(err => {
                if (err) return done(err);
                done();
            });
    });
    it('Post /api/v1/products should return 200 if request body contains product_name and price', done => {
        request(server)
            .post('/api/v1/products')
            .send({
                product_name: 'grapes juice',
                price: 12,
            })
            .expect(200)
            .expect((res: { body: { name: string; price: number } }) => {
                expect(res.body.name === 'grapes juice');
                expect(res.body.price === 12);
            })
            .end(err => {
                if (err) return done(err);
                done();
            });
    });
    it('Post /api/v1/products should return 400 if request body is invalid', done => {
        request(server)
            .post('/api/v1/products')
            .send({
                product_name: 'grapes juice',
            })
            .expect(400)
            .end(err => {
                if (err) return done(err);
                done();
            });
    });
    it('Get /api/v1/products/produced should return 200 with objects', done => {
        request(server)
            .get('/api/v1/products/produced')
            .expect(200)
            .expect((res: { body: { objects: any } }) => {
                expect(res.body.objects).not.toBeUndefined();
                expect(res.body.objects).toBeInstanceOf(Array);
            })
            .end(err => {
                if (err) return done(err);
                done();
            });
    });
    it('Get /api/v1/products/aaaaa/setting should return 404', done => {
        request(server).get('/api/v1/products/aaaaa/setting').expect(404, done);
    });
    it('Get /api/v1/products should contains X-Response-Time', done => {
        request(server)
            .get('/api/v1/products')
            .expect(200)
            .expect(res => {
                const { header } = res;
                expect(header['X-Response-Time'.toLowerCase()]).not.toBeUndefined();
            })
            .end(err => {
                if (err) return done(err);
                done();
            });
    });
    it('Get /api/v2/products should return 200', done => {
        request(server).get('/api/v2/products').expect(200, done);
    });
});

describe('Load Controller Files', () => {
    it('Get /api/v2/user should be 404 because option recursive is false', done => {
        request(server).get('/api/v2/user').expect(404, done);
    });
});
