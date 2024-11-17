const Arret = require("../models/arretModel");

const creatArret = (req, res) => {
    const {name_arret, coordonnes} = req.body;
    const arretData = {name_arret, coordonnes};
    
    console.log(name_arret)
    Arret.creatArret(arretData, (err, result) => {
        if (err) {
            return res.status(500).json({ error: "Erreur lors de la création de l'arret" });
        }
    
        res.status(201).json({ message: "Arret créé avec succès" });
    })
}

module.exports = {creatArret}