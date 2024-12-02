module.exports = async function (context, req) {
    // Safely check if req.query and req.body are defined
    const name = (req.query && req.query.name) || (req.body && req.body.name) || "world";
    
    context.res = {
        status: 200,
        body: `Hello, ${name}!`
    };
};
