// Load dotenv
require("dotenv").config();
const express = require("express");
const os = require("os");
const morgan = require("morgan");
const app = express();
const port = process.env.PORT || 3000;

// Controllers
const homeController = require("./controllers/homeController");
const catchAllController = require("./controllers/catchAllController");
const pingController = require("./controllers/pingController");

// Other middleware
// This replaced using bodyParser which was added in express v4.16.0 and higher
// https://stackoverflow.com/questions/24330014/bodyparser-is-deprecated-express-4
app.use(express.json());
app.use(
  express.urlencoded({
    extended: true,
  })
);

// Logging
app.use(morgan("dev"));
// Controllers to use with routing
// Standard controllers
app.use("/api/ping", pingController);
app.use(homeController);

// Catches all non matching routes and redirects it back to the root - must be placed last in the chain of middleware
app.use(catchAllController);

try {
  const server = app.listen(port, () => {
    console.log(`INFO: Server is listening on port ${port}`);
    console.log(
      `INFO: There is ${
        os.cpus().length
      } cores available to spawn node processes on`
    );
  });
} catch (error) {
  // Log the instance/VM name that the application is running on
  console.log(`This instance is: ${process.env.COMPUTERNAME}`);
  console.log("ERROR: An error has occurred: ", error);
}
