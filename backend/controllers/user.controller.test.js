const request = require("supertest");
const app = require("../app");

const { User } = require('./../models');

describe('User Controller Test Suite', () => {
    beforeAll(async () => {
        await User.destroy({ where: {}, truncate: true });
    });

    test('Get all users should return empty', async () => {
        const response = await request(app)
            .get('/api/v1/users')
            .expect(200);
        const users = response.body;
        expect(users).not.toBeUndefined();
        expect(users.length).toBe(0);
    });

    test('Get all users should return 2 users', async () => {
        await User.create({ name: 'testb1', email: 'testb1@mail.com', password: 'testb1pass', role: 'EMPLOYEE' });
        await User.create({ name: 'testa2', email: 'testa2@mail.com', password: 'testa2pass', role: 'ADMIN' });

        const response = await request(app)
            .get('/api/v1/users')
            .expect(200);
        const users = response.body;
        expect(users).not.toBeUndefined();
        expect(users.length).toBe(2);
        // order check
        expect(users[0].name).toBe('testa2');
        expect(users[1].name).toBe('testb1');
    });

    test('Get user by name should return 404', async () => {
        const response = await request(app)
            .get('/api/v1/users/5')
            .expect(404);
        expect(response.body).not.toBeUndefined();
        expect(response.body.error).toBe('No user found for given id');
    });

    test('Get user by name should return user object 1', async () => {
        const response = await request(app)
            .get('/api/v1/users/1')
            .expect(200);
        const user = response.body;
        expect(user).not.toBeUndefined();
        expect(user.name).toBe('testb1');
        expect(user.email).toBe('testb1@mail.com');
        expect(user.role).toBe('EMPLOYEE');
    });

    test('Get user by name should return user object 2', async () => {
        const response = await request(app)
            .get('/api/v1/users/2')
            .expect(200);
        const user = response.body;
        expect(user).not.toBeUndefined();
        expect(user.name).toBe('testa2');
        expect(user.email).toBe('testa2@mail.com');
        expect(user.role).toBe('ADMIN');
    });

    test('Login user should return missing parameters', async () => {
        const response = await request(app)
            .post('/api/v1/users/login').send({ email: 'testb1' })
            .set('Accept', 'application/json')
            .expect('Content-Type', /json/)
            .expect(400);
        const resBody = response.body;
        expect(resBody).not.toBeUndefined();
        expect(resBody.error).toBe('Missing required fields.');
    });

    test('Login user should return invalid login credentials for wrong email', async () => {
        const response = await request(app)
            .post('/api/v1/users/login').send({ email: 'test@mail.com', password: 'test' })
            .set('Accept', 'application/json')
            .expect('Content-Type', /json/)
            .expect(401);
        const resBody = response.body;
        expect(resBody).not.toBeUndefined();
        expect(resBody.error).toBe('Invalid login credentials');
    });

    test('Login user should return invalid login credentials for wrong password', async () => {
        const response = await request(app)
            .post('/api/v1/users/login').send({ email: 'testb1@mail.com', password: 'test' })
            .set('Accept', 'application/json')
            .expect('Content-Type', /json/)
            .expect(401);
        const resBody = response.body;
        expect(resBody).not.toBeUndefined();
        expect(resBody.error).toBe('Invalid login credentials');
    });

    test('Login user should return user object for correct credentials', async () => {
        const response = await request(app)
            .post('/api/v1/users/login').send({ email: 'testb1@mail.com', password: 'testb1pass' })
            .set('Accept', 'application/json')
            .expect('Content-Type', /json/)
            .expect(200);
        const user = response.body;
        expect(user).not.toBeUndefined();
        expect(user.name).toBe('testb1');
        expect(user.email).toBe('testb1@mail.com');
        expect(user.role).toBe('EMPLOYEE');
        expect(user.password).toBeUndefined();
    });
});