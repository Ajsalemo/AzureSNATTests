const express = require("express");
const axiosInstance = require("../config/axiosInstance");
const router = express.Router();

const pingController = router.get("/", async (_, res, next) => {
  try {
    const { data } = await axiosInstance.get(process.env.API_URL);
    res.send(data);
  } catch (error) {
    console.log("An error has occurred: ", error);
    next(error);
  }
});

module.exports = pingController;
