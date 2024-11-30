const Sequelize = require('sequelize');

//conexão com banco de dados
const sequelize = new Sequelize('cardapio', 'Douglas', 'batata5.', {
    host: 'museus.mysql.database.azure.com',
    dialect: 'mysql',
    "ssl": true,
    "dialectOptions": {
       "ssl": {
          "require": true
       }
     }
  });

module.exports = sequelize