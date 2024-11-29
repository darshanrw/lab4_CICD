module.exports = async function (context, req) {
    context.log('JavaScript HTTP trigger function processed a request.');
    const name = req.query.name || "world";
    context.res = { body: `Hello, ${name}!` };
};
