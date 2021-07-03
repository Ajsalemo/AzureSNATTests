const express = require("express");
const router = express.Router();

const homeController = router.get("/", (_, res, next) => {
  try {
    res.send("Express-api-be-postgres-connectionpool");
  } catch (error) {
    console.log("An error has occurred: ", error);
    next(error);
  }
});

module.exports = homeController;
