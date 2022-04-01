const {Model, DataTypes} = require('sequelize');
const sequelize = require('../database')

class Icream extends Model {}

Icream.init({
    name:{
        type: DataTypes.STRING
    }
},{
    sequelize,
    modelName: 'icream'
})

module.exports = Icream