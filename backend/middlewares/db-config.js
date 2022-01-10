// Importation de sequelize
//On définit la base de configuration de notre base de donnée
const Sequelize = require('sequelize');



const db = new Sequelize(process.env.db_name, process.env.db_user, process.env.db_password, {
    db_host: 'localhost',
    dialect: 'mysql',
    port: 3306
});

/* pour l'exploiter comme model*/
module.exports = db;
