const Sequilize = require('sequelize');
const sequelize = require('../utils/database');

const todo = sequelize.define('todo', {
    id: {
        primaryKey: true,
        autoIncrement: true,
        alloNull: false,
        type: Sequilize.INTEGER
    },
    done: {
        type: Sequilize.BOOLEAN,
        allowNull: false
    },
    title: {
        type: Sequilize.STRING,
        allowNull: false
    }
});

module.exports = todo;
