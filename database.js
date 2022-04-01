const {Sequelize} = require('sequelize');

const sequelize = new Sequelize('cold_db', 'user', 'password', {
    dialect: "sqlite",
    host: './dev.sqlite'
})

module.exports = sequelize;