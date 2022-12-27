const User = require("../models/User");
const SessionClass = require("../models/SessionModel");
const userAgentParser = require("../utils/userAgentParser");

const postLoginUser = async (req, res) => {
  const [username, password] = [req.body.username, req.body.password];
  if (!username || !password) {
    res.status(400).send("Username and password are required");
  }
  const user = new User({ username, password });

  //if login is successful, the user object will be sent back to the client
  var result_login = await user.login();
  if (result_login.status !== 200) {
    res.status(result_login.status).send(result_login.message);
    return;
  }
  const userAgentInfo = userAgentParser(req.headers["user-agent"]);
  const [browser, os, browserVersion, osVersion] = [
    userAgentInfo.browser,
    userAgentInfo.os,
    userAgentInfo.browserVersion,
    userAgentInfo.osVersion,
  ];

  //set cookie max age to 1 day
  const cookieMaxAge = 24 * 60 * 60 * 1000;
  const expirationDate = new Date();
  // Set the expiration date to the current date + the session cookie max age (in milliseconds)
  expirationDate.setMilliseconds(
    expirationDate.getMilliseconds() + cookieMaxAge
  );

  var userIp;
  if (req.headers["x-forwarded-for"]) {
    // the request is being made through a proxy
    userIp = req.headers["x-forwarded-for"];
  } else {
    // the request is not being made through a proxy
    userIp = req.connection?.remoteAddress;
  }

  const session = new SessionClass({
    userId: username,
    userIP: userIp,
    browser: browser,
    browserVersion: browserVersion,
    os: os,
    osVersion: osVersion,
    expirationTimestamp: expirationDate,
  });
  //save session to database
  SessionClass.saveSession(session);

  //send cookie to client with session id
  res.cookie("sessionId", session.sessionId, {
    maxAge: cookieMaxAge,
    httpOnly: true,
    secure: false,
  });
  res.headers = {
    "Access-Control-Allow-Origin": req.headers.origin,
    "Access-Control-Allow-Credentials": true,
    "Access-Control-Allow-Methods": "GET,HEAD,PUT,PATCH,POST,DELETE",
  };

  res
    .status(200)
    .send({ user: result_login.user, sessionId: session.sessionId });
};

const getAuth = async (req, res) => {
  //send okay status if cookie is present
  if (!req.cookies.sessionId) {
    res.redirect("/");
    return;
  }

  const session = await SessionClass.checkSession(req.cookies.sessionId);
  if (!session) {
    res.redirect("/");
    return;
  }

  res.status(200).send({ username: session.userId });
};

module.exports = {
  postLoginUser,
  getAuth,
};
