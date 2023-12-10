const handler = {};

handler.notFoundHandler = (requestProperties, callback) => {
    callback(404, {
        message: "URL is not available"
    })
};

module.exports = handler;