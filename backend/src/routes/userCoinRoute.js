const express = require("express");
const router = express.Router();
const sessionChecker = require("../middlewares/sessionChecker");
const registerController = require("../controllers/registerController");

router.post(
  "/user/addCoin",
  sessionChecker,
  registerController.postRegisterNewCoin
);

router.post(
  "/user/deleteCoin",
  sessionChecker,
  registerController.postDeleteCoin
);

router.post(
  "/user/getUserCoinList",
  sessionChecker,
  registerController.postGetUserCoinList
);

module.exports = router;
