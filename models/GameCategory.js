const Sequelize = require("sequelize");
const connection = require("../database/database");

const GameCategory = connection.define('games', {
    title: {
        type: Sequelize.STRING,
        allowNull: false,

    },price: {
        type: Sequelize.INTEGER,
        allowNull: false,

    },year: {
        type: Sequelize.INTEGER,
        allowNull: false
    }

});

GameCategory.sync({force: false});

module.exports = GameCategory;