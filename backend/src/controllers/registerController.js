const User = require("../models/User");

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

const postRegisterNewCoin = async (req, res) => {
  const [coinId, coinSymbol, username] = [
    req.body.id,
    req.body.symbol,
    req.body.username,
  ];

  const userCoinList = await User.addCoin(coinId, coinSymbol, username);
  if (!userCoinList) {
    res.status(400).send("Coin is not added");
  } else {
    res.status(200).send(userCoinList);
  }
};

module.exports = {
  postRegisterUser,
  postCheckUsernameAvaiable,
  postCheckEmailAvaiable,
  postRegisterNewCoin,
};
