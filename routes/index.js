const express = require("express");
const router = express.Router();

const userController = require("../controllers/userController")
const arretController = require("../controllers/arretController")
const transportController = require("../controllers/transportController")
const livraison = require("../controllers/livraisonController")

router.post("/user",userController.createUser);
router.post("/auth", userController.loginUser);

router.post("/arret",arretController.createArret);
router.get("/arret",arretController.getAllArrets);

router.post("/transport", transportController.createTransport);

router.post("/livraison", livraison.createLivraison);

module.exports = router;