import axiosInstance from "./axios";

async function getRequestFullCoinInfoList() {
  var getRequestFullCoinInfoListResponse;
  await axiosInstance
    .get("/api/getFullCoinInfoList", { withCredentials: true })
    .then((response) => {
      getRequestFullCoinInfoListResponse = response;
    })
    .catch((error) => {
      getRequestFullCoinInfoListResponse = error;
    });
  return getRequestFullCoinInfoListResponse;
}

async function getRequestBlockchainList() {
  var getRequestBlockchainListResponse;
  await axiosInstance
    .get("/api/getBlockchainList", { withCredentials: true })
    .then((response) => {
      getRequestBlockchainListResponse = response;
    })
    .catch((error) => {
      getRequestBlockchainListResponse = error;
    });
  console.log("getRequestBlockchainListResponse");
  console.dir(getRequestBlockchainListResponse);
  return getRequestBlockchainListResponse;
}

async function getRequestCoinPrice(coin, currency) {
  var getRequestCoinPriceResponse;
  await axiosInstance
    .get(`/api/getCoinPrice/${coin}/${currency}`, { withCredentials: true })
    .then((response) => {
      getRequestCoinPriceResponse = response;
    })
    .catch((error) => {
      getRequestCoinPriceResponse = error;
    });
  console.log("getRequestCoinPriceResponse");
  console.dir(getRequestCoinPriceResponse);
  return getRequestCoinPriceResponse;
}

async function getRequestCoinPriceLast24Hours(coin, currency) {
  var getRequestCoinPriceLast24HoursResponse;
  await axiosInstance
    .get(`/api/getCoinPriceLast24Hours/${coin}/${currency}`, {
      withCredentials: true,
    })
    .then((response) => {
      getRequestCoinPriceLast24HoursResponse = response;
    })
    .catch((error) => {
      getRequestCoinPriceLast24HoursResponse = error;
    });
  console.log("getRequestCoinPriceLast24HoursResponse");
  console.dir(getRequestCoinPriceLast24HoursResponse);
  return getRequestCoinPriceLast24HoursResponse;
}

export default {
  getRequestFullCoinInfoList,
  getRequestBlockchainList,
  getRequestCoinPrice,
  getRequestCoinPriceLast24Hours,
};
