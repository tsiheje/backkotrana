const connection = require("../config/dbconnexion");

const Livraison = {
    createLivraison : (livraisonData, callback) => {
        connection.query(
            "INSERT INTO livraison (coordonnes_recuperation, coordonnes_destination, date_recuperation, date_livraison) values (?,?,?,?)",
            [livraisonData.coordonnes_recuperation,livraisonData.coordonnes_destination,livraisonData.date_recuperation,livraisonData.date_livraison], callback
        )
    }
}

module.exports = Livraison;