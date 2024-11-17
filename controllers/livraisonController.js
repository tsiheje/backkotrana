const Livraison = require("../models/livraisonModel");

const createLivraison = (req, res) => {
    const { coordonnes_recuperation, coordonnes_destination, date_recuperation, date_livraison} = req.body;

    if (!coordonnes_recuperation || !coordonnes_destination || !date_recuperation || !date_livraison) {
        return res.status(400).json({ error: "Tous les champs sont requis." });
    }

    const livraisonData = {
        coordonnes_recuperation: JSON.stringify(coordonnes_recuperation), 
        coordonnes_destination: JSON.stringify(coordonnes_destination),
        date_recuperation,
        date_livraison,
    };

    Livraison.createLivraison(livraisonData, (err, result) => {
        if (err) {
            console.error("Erreur lors de la création de la livraison :", err.message);
            return res.status(500).json({ error: "Erreur interne du serveur" });
        }

        res.status(201).json({ message: "Livraison créée avec succès", livraisonId: result.insertId });
    });
};

module.exports = { createLivraison };
