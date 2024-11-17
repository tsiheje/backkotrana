const connection = require("../config/dbconnexion");

const Transport = {
    createTransport : (busData, callback) => {
        connection.query(
            "INSERT INTO transport (name, type, id_arret) values (?,?,?)",
            [busData.name, busData.type, busData.id_arret],callback
        );
    }
}

module.exports = Transport