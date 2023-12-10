// Dependencies
const http = require("http")

// app object
const app = {};

// config
app.config = {
    port: 3000,
}

// Create Server
app.createServer = () => {
    const server = http.createServer(app.handleReqRes)
    server.listen(app.config.port, () => {
        console.log(`listening to the port ${app.config.port}`);
    })
}

// Handle req & res
app.handleReqRes = (req, res) => {
    res.end("Hello World")
}

app.createServer();