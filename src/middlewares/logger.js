const logger = (req, res, next) => {
    const method = req.method;
    const URL = req.url;
    console.log(`method: ${method} \nURL: ${URL} \ntimestamp: ${new Date().toISOString()}`);
    next();
}
module.exports = logger;