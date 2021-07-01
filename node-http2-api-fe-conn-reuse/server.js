require("dotenv").config();
const http2 = require("http2")

const port = process.env.PORT || 3000;
const host = process.env.HOST || "localhost";
const pingController = require("./controllers/pingController");

const requestListener = (req, res) => {
  switch (req.url) {
    case "/api/ping":
      pingController(res);
      break;
    case "/":
      res.writeHead(200);
      res.end("Node-http2-api-fe-conn-reuse");
      break;
    default:
      res.writeHead(302, { Location: "/" });
      res.end();
  }
};

const server = http2.createServer(requestListener);

server.listen(port, host, () => {
  // Log the instance/VM name that the application is running on
  console.log(`This instance is: ${process.env.COMPUTERNAME}`);
  console.log(`Server is running at ${host}:${port}`);
});
