const express = require("express");
const router = express.Router();
const sessionChecker = require("../middlewares/sessionChecker");
const registerController = require("../controllers/registerController");

router.post(
  "/user/addCoin",
  sessionChecker,
  registerController.postRegisterNewCoin
);

module.exports = router;
