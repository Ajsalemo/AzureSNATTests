const http = require("http");

const port = process.env.PORT || 3000;
const host = process.env.HOST || "localhost";
const pongController = require("./controllers/pongController");

const requestListener = (req, res) => {
  switch (req.url) {
    case "/api/pong":
      pongController(res);
      break;
    case "/":
      res.writeHead(200);
      res.end("Node-https-api-be");
      break;
    default:
      res.writeHead(302, { Location: "/" });
      res.end();
  }
};

const server = http.createServer(requestListener);

server.listen(port, host, () => {
  // Log the instance/VM name that the application is running on
  console.log(`This instance is: ${process.env.COMPUTERNAME}`);
  console.log(`Server is running at ${host}:${port}`)
}
);
