const express = require("express");
const router = express.Router();

const registerController = require("../controllers/registerController");

router.post("/register", registerController.postRegisterUser);
router.post("/username", registerController.postCheckUsernameAvaiable);
router.post("/email", registerController.postCheckEmailAvaiable);

module.exports = router;
