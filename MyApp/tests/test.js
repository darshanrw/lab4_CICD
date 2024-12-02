const httpFunction = require('../index');

describe('HTTP Trigger Function', () => {
    let context;
    let req;

    beforeEach(() => {
        context = { log: jest.fn() };
    });

    test('should return 200 with a greeting', async () => {
        req = { query: { name: 'Azure' } };

        await httpFunction(context, req);

        expect(context.res.status).toBe(200);
        expect(context.res.body).toBe('Hello, Azure!');
    });

    test('should return 200 with default greeting if no name is provided', async () => {
        req = { query: {} }; // Ensure query is an empty object

        await httpFunction(context, req);

        expect(context.res.status).toBe(200);
        expect(context.res.body).toBe('Hello, world!');
    });
});
