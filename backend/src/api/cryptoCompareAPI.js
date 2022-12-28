const baseURL = "https://min-api.cryptocompare.com/data/";
let apiKey = "7597a9919714d4ca350b916b59c6a2a32433c4f64d546bb6f6184719269c23d8";
const applicationName = "QRCapital-Full-Stack-Challenge";

async function fetchJSON(url) {
  return await fetch(url)
    .then((response) => {
      if (response.ok) {
        return response.json();
      } else {
        throw new Error(
          "Error while fetching the JSON from CryptoCompare API! Error Code: " +
            response.status +
            " - " +
            response.statusText
        );
      }
    })
    .then((body) => {
      if (body.Response === "Error") {
        throw new Error(body.Message);
      }
      return body;
    });
}

const getFullCoinInfoList = async () => {
  return await fetchJSON(
    baseURL +
      "all/coinlist" +
      "?api_key=" +
      apiKey +
      "&extraParams=" +
      applicationName
  );
};

const getBlockchainList = async () => {
  return await fetchJSON(
    baseURL +
      "blockchain/list" +
      "?api_key=" +
      apiKey +
      "&extraParams=" +
      applicationName
  );
};

//get the price of a coin in a specific currency
const getCoinPrice = async (coin, currency) => {
  try {
    return await fetchJSON(
      baseURL +
        "pricemulti" +
        "?fsyms=" +
        coin +
        "&tsyms=" +
        currency +
        "&api_key=" +
        apiKey +
        "&extraParams=" +
        applicationName
    );
  } catch (error) {
    console.log("Error while fetching the price of the coin " + coin + "!");
    console.dir(error);
    return 0;
  }
};

//get the price of a coin in last 24 hours
const getCoinPriceLast24Hours = async (coin, currency) => {
  try {
    var resultCoinPrice24Hours = await fetchJSON(
      baseURL +
        "v2/histohour" +
        "?fsym=" +
        coin +
        "&tsym=" +
        currency +
        "&limit=24" +
        "&api_key=" +
        apiKey +
        "&extraParams=" +
        applicationName
    );
    return resultCoinPrice24Hours.Data.Data[0].close;
  } catch (error) {
    console.log(
      "Error while fetching the 24-hours history price of the coin " +
        coin +
        "!"
    );
    console.dir(error);
    return 0;
  }
};

module.exports = {
  getFullCoinInfoList,
  getBlockchainList,
  getCoinPrice,
  getCoinPriceLast24Hours,
};
