const {DataTypes}=require('sequelize');
const sequelize=require('./config')


const Product = sequelize.define('Product', {
    // Model attributes are defined here
    ProductName: {
      type: DataTypes.STRING,
      allowNull: false,
      allowRepeat:false
    },
    ProductType: {
      type: DataTypes.STRING
      // allowNull defaults to true
    }
  }, {
      timestamps:false
    // Other model options go here
  });

module.exports=Product