const express = require("express");
const axiosInstance = require("../config/axiosInstance");
const router = express.Router();

const pingController = router.get("/", (_, res, next) => {
  try {
    axiosInstance.get(process.env.API_URL).then((data) => {
      res.send(data.data);
    });
  } catch (error) {
    console.log("An error has occurred: ", error);
    next(error);
  }
});

module.exports = pingController;
