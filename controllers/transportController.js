const Transport = require("../models/transportModel");

const createTransport = (req, res) => {
    const {name, type, id_arret} = req.body;
    const transportData = {name, type, id_arret}

    Transport.createTransport(transportData, (err, result) => {
        if (err) {
            return res.status(500).json({ error: "Erreur lors de la création de la transport" });
        }
    
        res.status(201).json({ message: "transport créé avec succès" });
    })
}

module.exports = {createTransport}