const Agent = require("agentkeepalive").HttpsAgent;

const keepaliveAgent = new Agent({
  maxSockets: 128,
  maxFreeSockets: 128,
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
