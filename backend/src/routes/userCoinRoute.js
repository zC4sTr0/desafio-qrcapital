const express = require("express");
const router = express.Router();
const sessionChecker = require("../middlewares/sessionChecker");
const registerController = require("../controllers/registerController");

router.post("/user/addCoin", sessionChecker, registerController.postAddCoin);

router.delete(
  "/user/deleteCoin",
  sessionChecker,
  registerController.deleteCoin
);

router.get(
  "/user/getUserCoinList",
  sessionChecker,
  registerController.getUserCoinList
);

module.exports = router;
