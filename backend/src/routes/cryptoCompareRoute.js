const express = require("express");
const router = express.Router();
const sessionChecker = require("../middlewares/sessionChecker");
const cryptoAPIController = require("../controllers/cryptoAPIController");

router.get(
  "/api/getFullCoinInfoList",
  sessionChecker,
  cryptoAPIController.getRequestFullCoinInfoList
);

router.get(
  "/api/getBlockchainList",
  sessionChecker,
  cryptoAPIController.getRequestBlockchainList
);

router.get(
  "/api/getCoinPrice/:coin/:currency",
  sessionChecker,
  cryptoAPIController.getRequestCoinPrice
);

router.get(
  "/api/getCoinPriceLast24Hours/:coin/:currency",
  sessionChecker,
  cryptoAPIController.getRequestCoinPriceLast24Hours
);

module.exports = router;
