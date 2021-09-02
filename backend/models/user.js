const { DataTypes } = require('sequelize');
const db = require("../middlewares/db-config");

/* création du schéma*/
module.exports = db.define('User', {

    pseudo: {
        type: DataTypes.STRING(25), unique: true, allowNull: false},
    password: {
        type: DataTypes.STRING(25),
        allowNull: false
    }
    //admin ???
});