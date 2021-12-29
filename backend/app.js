// IMPORTATIONS
const express = require('express');// on importe express
const app = express(); // création de l'application express
const path = require('path');/* importation de node qui donne accès au chemin de notre système de fichier */
const helmet = require('helmet'); /* técupération du middleware Helmet qui sécurise les appli Express en définissant divers en-têtes HTTP
contient de 9 middlewares de sécurité : csp, hidePowerBy, hsts, ieNoOpen, noCache, noSniff, frameguard, clickjacking, xssFilter*/
const db = require("./middlewares/db-config");// importation de la base de données
const dbassoc = require("./models/db-association"); // importation des models de la base de données  // ??

db.authenticate()
    .then(() => {
        console.log('Connection à la base de données réussie !');
    })
    .catch((error) => {
        console.error('Impossible de se connecter à la base de données', error);
    });

db.sync({ alter: true });

//ROUTES 
const postRoutes = require('./routes/post'); // récuperation des routes post
const userRoutes = require('./routes/user'); // récupération des routes user
const commentsRoutes = require('./routes/comments'); // récupération des routes comments

// CROSS ORIGIN RESOURCE SHARING
/* premier middlemware executé par le serveur, général, appliqué à toute les routes à toute les requêtes envoyées à notre serveur*/
app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');/* l'origine qui à le droit d'accèder à norte API c'est tout le monde*/
    res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content, Accept, Content-Type, Authorization');/* on donne l'autorisation d'utiliser certaines entêtes sur l'objet requête*/
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, PATCH, OPTIONS');/* on donne l'autorisation d'utiliser certaines méthodes*/
    next();
});

//ENDPOINTS
/* Chemin d'accès des endpoints et enregistrements des routes*/
app.use(express.json());/* middleware qui permet de reconnaitre l'objet requête entrant en tant qu'objet JSON*/
app.use('/api/post', postRoutes);
app.use('/api/user', userRoutes);
app.use('/api/comments', commentsRoutes);
app.use('/images', express.static(path.join(__dirname, 'files'))); /* cette requête sert à tourver une image dans le dossier statique /image */
app.use(helmet());// HELMET

// EXPORT SERVER
module.exports = app; // on exporte l'application express dans le server node.js
