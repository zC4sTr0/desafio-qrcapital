const express = require("express");
const router = express.Router();
const sessionChecker = require("../middlewares/sessionChecker");

const authController = require("../controllers/authController");

//use sessionChecker middleware to check if user is logged in
router.get("/auth", sessionChecker, authController.getAuth);
module.exports = router;
