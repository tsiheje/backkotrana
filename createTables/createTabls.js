const connetion = require("../config/dbconnexion");

const createTableUser = `
  CREATE TABLE IF NOT EXISTS users (
    id_user INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(50) NOT NULL,
    firstname VARCHAR(50) NOT NULL,
    email VARCHAR(50) NOT NULL,
    phone VARCHAR(15) NOT NULL,
    roles VARCHAR(50) NOT NULL,
    password VARCHAR(50) NOT NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
  )
`;

const createTableArret = `
  CREATE TABLE IF NOT EXISTS arret (
    id_arret INT AUTO_INCREMENT PRIMARY KEY,
    name_arret VARCHAR(50) NOT NULL,
    fokotany VARCHAR(50) NOT NULL,
    coordonnes JSON NOT NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
  )
`;

const createTableTransport = `
  CREATE TABLE IF NOT EXISTS transport (
    id_bus INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(50) NULL,
    type VARCHAR(50) NOT NULL,
    id_arret INT NOT NULL, -- Clé étrangère
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
    FOREIGN KEY (id_arret) REFERENCES arret(id_arret) ON DELETE CASCADE
  )
`;

const creatTableLivraison = `
  	CREATE TABLE IF NOT EXISTS livraison (
      id_livraison INT AUTO_INCREMENT PRIMARY KEY,
      coordonnes_recuperation JSON NOT NULL,
      coordonnes_destination JSON NOT NULL,
      date_recuperation DATETIME NOT NULL,
      date_livraison DATETIME NOT NULL,
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

  connetion.query(createTableArret, (err, results, fields) => {
    if (err) {
      console.error('Erreur lors de la création de la table arret: ' + err.message);
    } else {
      console.log('Table arret créée avec succès.');
    }
  });
  
  connetion.query(createTableTransport, (err, results, fields) => {
    if (err) {
      console.error('Erreur lors de la création de la table transport: ' + err.message);
    } else {
      console.log('Table transport créée avec succès.');
    }
  });

  connetion.query(creatTableLivraison, (err, results, fields) => {
    if (err) {
      console.error('Erreur lors de la création de la table livraison: ' + err.message);
    } else {
      console.log('Table livraison créée avec succès.');
    }
  });