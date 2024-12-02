const httpFunction = require('../index'); // Adjust the path if needed
const chai = require('chai');
const expect = chai.expect; // Use Chai's expect

describe('HTTP Trigger Function', () => {
    it('should return 200 with a greeting', async () => {
        const context = { 
            log: function () {},
            res: {}
        };
        const req = { query: { name: 'Azure' } };

        await httpFunction(context, req);

        expect(context.res.status).to.equal(200);
        expect(context.res.body).to.equal('Hello, Azure!');
    });

    it('should return 200 with default greeting if no name is provided', async () => {
        const context = { 
            log: function () {},
            res: {}
        };
        const req = {}; // No query parameter

        await httpFunction(context, req);

        expect(context.res.status).to.equal(200);
        expect(context.res.body).to.equal('Hello, world!');
    });
});
