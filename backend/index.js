const express = require("express");
const app = express();
const db = require("./src/database/database");
require("dotenv").config();

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.listen(process.env.PORT, () => {
  console.log("Example app listening on port 3001!");
  db.connect();
});
