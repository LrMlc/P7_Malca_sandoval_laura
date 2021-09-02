const { DataTypes } = require('sequelize');
const db = require("../middlewares/db-config");

module.exports = db.define('comments', {

    content: {
        type: DataTypes.STRING(250), // sequelize.datatypes.string ???????
        allowNull: false
    }
});
