const connection = require("../config/dbconnexion");

const Arret = {
    creatArret : (arretData, callback) => {
        connection.query(
            "INSERT INTO arret (name_arret, coordonnes) values (?,?)",
            [arretData.name_arret, arretData.coordonnes],callback
        );
    }
}

module.exports = Arret;