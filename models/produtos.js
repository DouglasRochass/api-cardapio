const { Sequelize, DataTypes } = require('sequelize');
const sequelize = require('../conexao');


const produtos = sequelize.define('produtos', {
     categoria:{
          type:DataTypes.STRING(50),
          allowNull:false
     },
  nome: {
    type: DataTypes.STRING,
    allowNull: false
  },
  descricao: {
    type: DataTypes.STRING,
    allowNull: true
  },
  preco:{
     type:DataTypes.DECIMAL(10,2),
     allowNull:false
  }
},
{
  // Para não criar a coluna createdAt e updateAt do sequelize e 
  // também para não pluralizar a tabela 
  timestamps: false,
  freezeTableName: true
});

module.exports = produtos