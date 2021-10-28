const { DataTypes } = require('sequelize');
const db = require("../middlewares/db-config");

module.exports = db.define('post', {

    content: {
        type: DataTypes.STRING(250),
        allowNull: false
    },
    file: {
        type: DataTypes.STRING(250),
        allowNull: true,
    }
});