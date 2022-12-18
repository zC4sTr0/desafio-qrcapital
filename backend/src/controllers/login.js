const User = require("../models/User");

const postLoginUser = async (req, res) => {
  console.log("User just tried to login with: ", req.body);
  const [username, password] = [req.body.username, req.body.password];
  const user = new User(username, password);
  //if login is successful, the user object will be sent back to the client
  var result_login = await user.login();
  if (result_login.status) {
    res.status(result_login.status).send(result_login.message);
  } else {
    res.status(200).send(result_login);
  }
};

module.exports = {
  postLoginUser,
};
