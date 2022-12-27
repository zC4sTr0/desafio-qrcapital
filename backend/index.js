const express = require("express");
const app = express();
const cors = require("cors");
const corsOptions = require("./src/config/corsOptions");
const cookieParser = require("cookie-parser");
require("dotenv").config();

// Routes and middlewares
const loginRoute = require("./src/routes/loginRoute");
const registerRoute = require("./src/routes/registerRoute");
const notFoundHandler = require("./src/middlewares/notFoundHandler");
const authRoute = require("./src/routes/authRoute");
const cryptoCompareRoute = require("./src/routes/cryptoCompareRoute");
const userCoinRoute = require("./src/routes/userCoinRoute");

app.use(cors(corsOptions));

app.use(
  express.urlencoded({
    extended: true,
  })
);
app.use(cookieParser());
app.use(express.json());
app.use(loginRoute);
app.use(registerRoute);
app.use(authRoute);
app.use(cryptoCompareRoute);
app.use(userCoinRoute);

// middleware for handling 404 requests
app.use(notFoundHandler);

app.listen(process.env.PORT || 3001, () => {
  console.log("Example app listening on port 3001!");
});

module.exports = app;
