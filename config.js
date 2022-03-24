const {Sequelize,DataTypes} = require('sequelize')
const sequelize = new Sequelize('User', 'postgres', 'zcon@123', {
    host: 'localhost',
    dialect: 'postgres',
    //logging: false
})

module.exports=sequelize