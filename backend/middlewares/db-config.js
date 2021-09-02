// Importation de sequelize
const Sequelize = require('sequelize');



const db = new Sequelize('groupomania', 'root','', {
    host: 'localhost',
    dialect: 'mysql',
    port: 3306
});

/* pour l'exploiter comme model*/
module.exports = db;
