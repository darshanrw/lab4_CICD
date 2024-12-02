const httpFunction = require('../index');
 
describe('HTTP Trigger Function', () => {
    test('should return 200 with a greeting', async () => {
        const context = { log: jest.fn() };
        const req = { query: { name: 'Azure' } };
 
        await httpFunction(context, req);
 
        expect(context.res.status).toBe(200);
        expect(context.res.body).toBe('Hello, Azure!');
    });
 
    test('should return 200 with default greeting if no name is provided', async () => {
        const context = { log: jest.fn() };
        const req = {};
 
        await httpFunction(context, req);
 
        expect(context.res.status).toBe(200);
        expect(context.res.body).toBe('Hello, world!');
    });
});