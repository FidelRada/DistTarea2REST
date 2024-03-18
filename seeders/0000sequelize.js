const Sequelize = require('sequelize');

const sequelize = new Sequelize('tarea1', 'postgres', '60910990', {
  host: 'localhost',
  dialect: 'postgres', // Indica que estás utilizando PostgreSQL
  port: 5432, // Puerto por defecto de PostgreSQL
});

module.exports = sequelize;
