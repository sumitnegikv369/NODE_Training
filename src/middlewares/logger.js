const logger = (req, res, next) => {
    const method = req.method;
    const URL = req.url;
    console.log(`method: ${method} \nURL: ${URL} \ntimestamp: ${new Date().toISOString()}`);
    next();
}
module.exports = logger;

// 9. Write a custom middleware function that logs the incoming requests' method, URL, and timestamp to the console.

