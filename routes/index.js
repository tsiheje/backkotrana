const express = require("express");
const router = express.Router();

const userController = require("../controllers/userController")
const arretController = require("../controllers/arretController")

router.post("/user",userController.createUser);
router.post("/auth", userController.loginUser);

router.post("/arret",arretController.creatArret);

module.exports = router;