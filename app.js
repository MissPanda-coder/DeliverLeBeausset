// app.js
const express = require("express");
const cors = require('cors');
const db = require('./server'); 
const app = express();
const port = 3003;

// Middleware pour parser le corps des requêtes en JSON
app.use(express.json());
app.use(cors());

// Importation des routes
const getRoutes = require('./routes/get');
const deleteRoutes = require('./routes/delete');
const postRoutes = require('./routes/post');
const updateRoutes = require('./routes/update');

// Utilisation des routes
app.use('/get', getRoutes);
app.use('/delete', deleteRoutes);
app.use('/post', postRoutes);
app.use('/update', updateRoutes);

// Connexion à la base de données
db.connect((err) => {
  if (err) {
    console.error("Erreur de connexion à la base de données :", err);
  } else {
    console.log("Connecté à la base de données MySQL");
  }
});

// Démarrer le serveur
app.listen(port, () => {
  console.log(`Serveur en cours d'exécution sur http://localhost:${port}`);
});
