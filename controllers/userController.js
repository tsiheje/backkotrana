const bcryptjs = require("bcryptjs");
const jwt = require("jsonwebtoken");
const User = require("../models/userModel");  

const createUser = (req, res) => {
  const { name, firstname, email, phone, roles, password } = req.body;

  User.findByEmail(email, (err, results) => {
    if (err) {
      return res.status(500).json({ error: "Erreur lors de la recherche de l'email" });
    }

    if (results.length > 0) {
      return res.status(400).json({ error: "Email déjà utilisé" });
    }

    bcryptjs.hash(password, 10, (err, hashedPassword) => {
      if (err) {
        return res.status(500).json({ error: "Erreur lors du hachage du mot de passe" });
      }

      const userData = { name, firstname, email, phone, roles, password: hashedPassword };
      User.create(userData, (err, result) => {
        if (err) {
          return res.status(500).json({ error: "Erreur lors de la création de l'utilisateur" });
        }

        res.status(201).json({ message: "Utilisateur créé avec succès" });
      });
    });
  });
};

const loginUser = (req, res) => {
  const { email, password } = req.body;
  console.log(password)
  User.findByEmail(email, (err, results) => {
    if (err) {
      return res.status(500).json({ error: "Erreur lors de la recherche de l'utilisateur" });
    }

    if (results.length === 0) {
      return res.status(400).json({ error: "Utilisateur non trouvé" });
    }

    const users = results[0];
    console.log(users.password)
    bcryptjs.compare(password, users.password, (err, isMatch) => {
      if (err) {
        return res.status(500).json({ error: "Erreur de comparaison du mot de passe" });
      }
      console.log(isMatch)
      if (!isMatch) {
        return res.status(400).json({ error: "Mot de passe incorrect" });
      }

      const token = jwt.sign({ id_user: users.id_user }, process.env.JWT_SECRET, { expiresIn: "1h" });

      res.status(200).json({
        message: "Connexion réussie",
        token
      });
    });
  });
};

module.exports = { createUser, loginUser };
