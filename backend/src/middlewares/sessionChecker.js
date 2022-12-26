const sessions = require("../models/SessionModel");

const sessionChecker = (req, res, next) => {
  console.log("sessionChecker: " + req.cookies.sessionId);
  // If there's no session ID in the cookie, redirect to the login page
  if (!req.cookies.sessionId) {
    res.redirect("/login");
    return;
  }
  // If the session ID is present, retrieve the session data from the map
  const sessionID = sessions.checkSession(req.cookies.sessionId);
  if (!sessionID) {
    console.log("sessionChecker: sessionID not found");
    res.redirect("/login");
    return;
  }
  // If the session data is present, continue to the next middleware
  console.log("sessionChecker: sessionID found");
  next();
};

module.exports = sessionChecker;
