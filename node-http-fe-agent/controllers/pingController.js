const https = require("https");
const options = require("../config/keepAlive");

const pingController = (res) => {
  https
    .get(options, (response) => {
      let data = "";
      response.on("data", (chunk) => {
        data += chunk;
      });

      response.on("end", () => {
        res.end(data);
      });
    })
    .on("error", (err) => {
      console.log("Error: " + err.message);
    });
};

module.exports = pingController;
