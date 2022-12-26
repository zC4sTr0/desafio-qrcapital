const cryptoCompareAPI = require("../api/cryptoCompareAPI");

const getRequestFullCoinInfoList = async (req, res) => {
  const fullCoinInfoList = await cryptoCompareAPI.getFullCoinInfoList();
  res.status(200).send(fullCoinInfoList);
};

const getRequestBlockchainList = async (req, res) => {
  const blockchainList = await cryptoCompareAPI.getBlockchainList();
  res.status(200).send(blockchainList);
};

const getRequestCoinPrice = async (req, res) => {
  const coin = req.params.coin;
  const currency = req.params.currency;
  const coinPrice = await cryptoCompareAPI.getCoinPrice(coin, currency);
  res.status(200).send(coinPrice);
};

const getRequestCoinPriceLast24Hours = async (req, res) => {
  const coin = req.params.coin;
  const currency = req.params.currency;
  const coinPriceLast24Hours = await cryptoCompareAPI.getCoinPriceLast24Hours(
    coin,
    currency
  );
  res.status(200).send(coinPriceLast24Hours);
};

module.exports = {
  getRequestFullCoinInfoList,
  getRequestBlockchainList,
  getRequestCoinPrice,
  getRequestCoinPriceLast24Hours,
};
