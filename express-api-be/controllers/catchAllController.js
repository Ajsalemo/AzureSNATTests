const express = require("express");
const router = express.Router();

// Catches all non matching routes and redirects it back to the root
const catchAllController = router.get("*", (_, res, next) => {
  try {
    res.redirect("/");
  } catch (error) {
    console.log("An error has occurred: ", error)
    next(error)
  }
});

module.exports = catchAllController;
