// Dependencies
const http = require("http");
const { handleReqRes } = require("./helpers/handleReqRes");

// app object
const app = {};

// config
app.config = {
  port: 5000,
};

// Create Server
app.createServer = () => {
  const server = http.createServer(app.handleReqRes);
  server.listen(app.config.port, () => {
    console.log(`listening to the port ${app.config.port}`);
  });
};

// Handle req & res
app.handleRequRes = handleReqRes;

app.createServer();
