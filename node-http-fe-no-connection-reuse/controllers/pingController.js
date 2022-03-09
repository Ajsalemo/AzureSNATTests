const https = require("https");

const pingController = (res) => {
  https
    .get(process.env.API_URL, (response) => {
      let data = "";

      response.on("data", (chunk) => {
        data += chunk;
      });

      response.on("end", () => {
        res.writeHead(200, { "Content-Type": "application/json" });
        res.end(data);
      });
    })
    .on("error", (err) => {
      console.log("Error: " + err.message);
    });
};

module.exports = pingController;
