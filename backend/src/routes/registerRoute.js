const express = require("express");
const router = express.Router();

const registerController = require("../controllers/registerController");

router.post("/register", registerController.postRegisterUser);
router.get("/username", registerController.postCheckUsernameAvaiable);
router.get("/email", registerController.postCheckEmailAvaiable);

module.exports = router;
