const { expect } = require('chai');
const httpFunction = require('../index');
 
describe('HTTP trigger test', () => {
    it('should return 200 with a greeting', async () => {
        const context = { log: () => {} };
        const req = { query: { name: "Azure" } };
 
        await httpFunction(context, req);
 
        expect(context.res.status).to.equal(200);
        expect(context.res.body).to.equal('Hello, Azure!');
    });
});