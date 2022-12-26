const crypto = require("crypto");

const generateSessionUID = () => {
  return crypto.randomBytes(32).toString("hex");
};

module.exports = generateSessionUID;
