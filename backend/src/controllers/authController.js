const User = require("../models/User");

const postLoginUser = async (req, res) => {
  const [username, password] = [req.body.username, req.body.password];

  if (!username || !password) {
    res.status(400).send("Username and password are required");
  }
  const user = new User({ username, password });
  //if login is successful, the user object will be sent back to the client
  var result_login = await user.login();
  //generate session ID and send it back to the client

  if (result_login.status !== 200) {
    res.status(result_login.status).send(result_login.message);
  } else {
    res.status(200).send(result_login.user);
  }
};

module.exports = {
  postLoginUser,
};
