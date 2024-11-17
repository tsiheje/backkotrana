const Arret = require("../models/arretModel");

const createArret = (req, res) => {
    const { name_arret, fokotany, coordonnes } = req.body;

    if (!name_arret || !fokotany || !coordonnes) {
        return res.status(400).json({ error: "Tous les champs sont obligatoires" });
    }

    const arretData = { name_arret, fokotany, coordonnes };

    Arret.createArret(arretData, (err, result) => {
        if (err) {
            return res.status(500).json({ error: "Erreur lors de la création de l'arrêt" });
        }
        res.status(201).json({ message: "Arrêt créé avec succès", id: result.insertId });
    });
};

const getAllArrets = (req, res) => {
    Arret.getAll((err, results) => {
        if (err) {
            return res.status(500).json({ error: "Erreur lors de la récupération des arrêts" });
        }
        res.status(200).json({ arrets: results });
    });
};

const deleteArret = (req, res) => {
    const { id } = req.params;

    if (!id) {
        return res.status(400).json({ error: "ID de l'arrêt requis" });
    }

    Arret.deleteArret(id, (err, result) => {
        if (err) {
            return res.status(500).json({ error: "Erreur lors de la suppression de l'arrêt" });
        }

        if (result.affectedRows === 0) {
            return res.status(404).json({ error: "Arrêt non trouvé" });
        }

        res.status(200).json({ message: "Arrêt supprimé avec succès" });
    });
};

module.exports = { createArret, getAllArrets, deleteArret };
