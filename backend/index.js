const express = require("express");
const app = express();
const cors = require("cors");
const corsOptions = require("./src/config/corsOptions");

require("dotenv").config();

// Routes for user login and registration
const loginRoute = require("./src/routes/loginRoute");
const registerRoute = require("./src/routes/registerRoute");

const notFoundHandler = require("./src/middlewares/notFoundHandler");

app.use(cors(corsOptions));

app.use(
  express.urlencoded({
    extended: true,
  })
);
app.use(express.json());

app.use(loginRoute);
app.use(registerRoute);

// middleware for handling 404 requests
app.use(notFoundHandler);

app.listen(process.env.PORT, () => {
  console.log("Example app listening on port 3001!");
});

module.exports = app;
