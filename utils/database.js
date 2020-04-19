const Sequilize = require('sequelize');
const DB_NAME = 'node_rest';
const USER_NAME = 'root';
const PASSWORD = '';

const sequelize = new Sequilize(DB_NAME, USER_NAME, PASSWORD, {
    host: 'localhost',
    dialect: 'mysql'
});

module.exports = sequelize;
