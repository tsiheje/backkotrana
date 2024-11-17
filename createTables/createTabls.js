const connetion = require("../config/dbconnexion");

const createTableUser = `
  CREATE TABLE IF NOT EXISTS users (
    id_user INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(50) NOT NULL,
    firstname VARCHAR(50) NOT NULL,
    email VARCHAR(50) NOT NULL,
    phone VARCHAR(15) NOT NULL,
    roles VARCHAR(50) NOT NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
  )
`;

connetion.query(createTableUser, (err, results, fields) => {
    if (err) {
      console.error('Erreur lors de la création de la table user: ' + err.message);
    } else {
      console.log('Table user créée avec succès.');
    }
  });