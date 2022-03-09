const express = require("express");
const router = express.Router();

const homeController = router.get("/", (_, res, next) => {
  try {
    res.send("ExpressAPI");
  } catch (error) {
    console.log("An error has occurred: ", error);
    next(error);
  }
});

module.exports = homeController;
