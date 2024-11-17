const express = require("express");
const router = express.Router();

const userController = require("../controllers/userController")

router.post("/user",userController.createUser);
router.post("/auth", userController.loginUser);

module.exports = router;