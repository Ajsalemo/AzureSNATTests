const https = require("https");

const keepaliveAgent = new https.Agent({
  keepAlive: false,
  maxSockets: 128, // or 128 / os.cpus().length if running node across multiple CPUs
  maxFreeSockets: 128, // or 128 / os.cpus().length if running node across multiple CPUs
  timeout: 60000,
  freeSocketTimeout: 30000,
});

const options = {
  host: `${process.env.API_URL}`,
  port: 443,
  path: "/api/pong",
  method: "GET",
  agent: keepaliveAgent,
};

module.exports = options;
