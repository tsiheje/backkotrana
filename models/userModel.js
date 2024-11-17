const connection = require("../config/dbconnexion");

const User = {
  findByEmail: (email, callback) => {
    connection.query("SELECT * FROM users WHERE email = ?", [email], callback);
  },

  create: (userData, callback) => {
    connection.query(
      "INSERT INTO users (name, firstname, email, phone, roles, password) VALUES (?, ?, ?, ?, ?, ?)", 
      [userData.name, userData.firstname, userData.email, userData.phone, userData.roles, userData.password], 
      callback
    );
  }
};

module.exports = User;
