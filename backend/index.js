const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const cors = require("cors");
require("dotenv").config();

// Routes for user login and registration
const loginRoute = require("./src/routes/loginRoute");
const registerRoute = require("./src/routes/registerRoute");

const notFoundHandler = require("./src/middlewares/notFoundHandler");

app.use(
  bodyParser.urlencoded({
    extended: true,
  })
);
app.use(bodyParser.json());

app.use(
  cors({
    origin: "http://localhost:3000",
    credentials: true,
    optionsSuccessStatus: 200,
  })
);

app.use(loginRoute);
app.use(registerRoute);

app.get("/", (req, res) => {
  res.send("Hello World!");
});

// middleware for handling 404 requests
app.use(notFoundHandler);

app.listen(process.env.PORT, () => {
  console.log("Example app listening on port 3001!");
});

module.exports = app;
