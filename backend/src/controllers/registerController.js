const User = require("../models/User");
const {
  getCoinPriceLast24Hours,
  getCoinPrice,
} = require("../api/cryptoCompareAPI");
const sessions = require("../models/SessionModel");

const updateCoinPrice = async (coinList) => {
  //iterate in coinList and create a array with coinSymbol using ',' as separator to pass to the API
  const coinSymbolList = coinList.map((coin) => coin.coinSymbol).join(",");
  const coinPriceList = await getCoinPrice(coinSymbolList, "USD");

  const coinListWithPrice = coinList.map((coin) => {
    coin.price = coinPriceList[coin.coinSymbol]?.["USD"];
    return coin;
  });

  const updatedCoinList = await Promise.all(
    coinListWithPrice.map(async (coin) => {
      const coinPrice = await getCoinPriceLast24Hours(coin.coinSymbol, "USD");
      coin.price24Hours = coinPrice;
      return coin;
    })
  );
  return updatedCoinList;
};

const postRegisterUser = async (req, res) => {
  const [username, password, email, name] = [
    req.body.username,
    req.body.password,
    req.body.email,
    req.body.displayName,
  ];
  const user = new User({ username, password, email, name });
  //if register is successful, the user object will be sent back to the client
  var result_login = await user.register();
  if (result_login.status) {
    res.body(result_login.status).send(result_login.message);
  } else {
    res.status(200).send(result_login);
  }
};

const postCheckUsernameAvaiable = async (req, res) => {
  const [username] = [req.body.username];
  const isUsernameValid = await User.checkUsernameAvaiable(username);
  if (!isUsernameValid) {
    res.status(400).send("Username is not available");
  } else {
    res.status(200).send("Username is available");
  }
};
const postCheckEmailAvaiable = async (req, res) => {
  const [email] = [req.body.email];
  const isEmailAvaiable = await User.checkEmailAvaiable(email);
  if (!isEmailAvaiable) {
    res.status(400).send("Email is not available");
  } else {
    res.status(200).send("Email is available");
  }
};

const postAddCoin = async (req, res) => {
  const [coinId, coinSymbol] = [req.body.id, req.body.symbol];

  var sessionID = req.cookies.sessionId;
  var username = await sessions.getUsernameBySessionID(sessionID);
  if (!username) {
    res.status(400).send("Username couldn't be found");
    return;
  }

  const userCoinList = await User.addCoin(coinId, coinSymbol, username);
  if (!userCoinList) {
    res.status(400).send("Coin is not added");
    return;
  }
  //get updated user coin list after adding new coin
  await updateCoinPrice(userCoinList);
  res.status(200).send(userCoinList);
};

const deleteCoin = async (req, res) => {
  const [coinId, coinSymbol] = [req.body.id, req.body.symbol];

  var sessionID = req.cookies.sessionId;
  var username = await sessions.getUsernameBySessionID(sessionID);
  if (!username) {
    res.status(400).send("Username couldn't be found");
    return;
  }

  const userCoinList = await User.deleteCoin(coinId, coinSymbol, username);
  if (!userCoinList) {
    res.status(400).send("Coin could not be deleted");
    return;
  }
  //get updated user coin list after adding new coin
  await updateCoinPrice(userCoinList);
  res.status(200).send(userCoinList);
};

const getUserCoinList = async (req, res) => {
  var sessionID = req.cookies.sessionId;
  var username = await sessions.getUsernameBySessionID(sessionID);
  if (!username) {
    res.status(400).send("Username couldn't be found");
    return;
  }

  const userCoinList = await User.getUserCoins(username);
  if (!userCoinList) {
    res.status(400).send("Coin List could not be found");
    return;
  }
  //get updated user coin list after adding new coin
  await updateCoinPrice(userCoinList);
  res.status(200).send(userCoinList);
};

module.exports = {
  postRegisterUser,
  postCheckUsernameAvaiable,
  postCheckEmailAvaiable,
  postAddCoin,
  getUserCoinList,
  deleteCoin,
};
