const express = require("express");
const router = express.Router();
const { Pool } = require("pg");

const pool = new Pool({
  user: process.env.POSTGRES_USER,
  host: process.env.POSTGRES_HOST,
  database: process.env.POSTGRES_DATABASE,
  password: process.env.POSTGRES_PASSWORD,
  max: 128,
  port: 5432,
});

pool.on("error", (err, _) => {
  console.error("Error:", err);
});

const pingController = router.get("/", async (_, res, next) => {
  const client = await pool.connect();
  const query = `SELECT * FROM "BMWCarTable";`;
  try {
    const { rows } = await client.query(query);
    client.release();
    res.json(rows);
  } catch (error) {
    console.log("An error has occurred: ", error);
    next(error);
  }
});

module.exports = pingController;
