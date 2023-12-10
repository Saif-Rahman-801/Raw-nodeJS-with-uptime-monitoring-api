const { StringDecoder } = require("string_decoder");
const url = require("url");

const handler = {};
handler.handleReqRes = (req, res) => {
  // const request handling
  // Get the url and parse it
  const parsedUrl = url.parse(req.url, true);

  const path = parsedUrl.path;
  const trimmedPath = path.replace(/^\/+|\/+$/g, "");
  const method = req.method.toLowerCase();
  const queryStringObj = parsedUrl.query;
  const headersObj = req.headers;

  const decoder = new StringDecoder("utf-8");
  let realData = "";

  req.on("data", (buffer) => {
    realData += decoder.write(buffer);
  });

  req.on("end", () => {
    realData += decoder.end();
    console.log(realData);
    // Response
    res.end("Hello World");
  });
};

module.exports = handler;