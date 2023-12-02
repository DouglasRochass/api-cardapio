const { Sequelize, DataTypes } = require('sequelize');
const sequelize = require('../conexao');

const usuario = sequelize.define('Usuario', {
  usuario: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true,
  },
  senha: {
    type: DataTypes.STRING,
    allowNull: false,
  }
},
{
  // Para não criar a coluna createdAt e updateAt do sequelize e 
  // também para não pluralizar a tabela 
  timestamps: false,
  freezeTableName: true
});

module.exports = usuario;
