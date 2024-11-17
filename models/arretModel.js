const connection = require("../config/dbconnexion");

const Arret = {
    createArret: (arretData, callback) => {
        connection.query(
            "INSERT INTO arret (name_arret, fokotany, coordonnes) VALUES (?, ?, ?)",
            [arretData.name_arret, arretData.fokotany, JSON.stringify(arretData.coordonnes)], // JSON.stringify pour stocker en JSON
            callback
        );
    },

    getAll: (callback) => {
        connection.query("SELECT * FROM arret", callback);
    },

    getById: (id, callback) => {
        connection.query("SELECT * FROM arret WHERE id_arret = ?", [id], callback);
    },

    updateArret: (id, arretData, callback) => {
        connection.query(
            "UPDATE arret SET name_arret = ?, fokotany = ?, coordonnes = ? WHERE id_arret = ?",
            [arretData.name_arret, arretData.fokotany, JSON.stringify(arretData.coordonnes), id],
            callback
        );
    },

    deleteArret: (id, callback) => {
        connection.query("DELETE FROM arret WHERE id_arret = ?", [id], callback);
    },
};

module.exports = Arret;
