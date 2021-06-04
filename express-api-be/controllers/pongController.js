const express = require("express");
const router = express.Router();

const pongController = router.get("/", (_, res) => {
  try {
    res.json({ message: "Pong" });
  } catch (error) {
    console.log("An error has occurred: ", error);
    next(error);
  }
});

module.exports = pongController;
