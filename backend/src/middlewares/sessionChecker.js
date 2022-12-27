const sessions = require("../models/SessionModel");

const sessionChecker = (req, res, next) => {
  // If there's no session ID in the cookie, redirect to the login page
  if (!req.cookies.sessionId) {
    res.redirect("/login");
    return;
  }
  // If the session ID is present, retrieve the session obj from the map or database
  const session = sessions.checkSession(req.cookies.sessionId);
  if (!session) {
    res.redirect("/login");
    return;
  }
  next();
};

module.exports = sessionChecker;
