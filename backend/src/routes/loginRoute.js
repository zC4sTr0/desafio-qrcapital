const express = require("express");
const router = express.Router();
const loginController = require("../controllers/authController");

router.post("/login", loginController.postLoginUser);

module.exports = router;
