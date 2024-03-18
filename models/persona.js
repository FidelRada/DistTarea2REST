'use strict';
const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Persona extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Persona.init({
    nombre: {
      type: DataTypes.STRING(50),
      allowNull: false
    },
    apellido: {
      type: DataTypes.STRING(50),
      allowNull: false
    },
    ci: {
      type: DataTypes.STRING(8),
      allowNull: false,
      validate: {
        isNumeric: true,
        len: [8, 8]
      }
    },
    telefono: {
      type: DataTypes.STRING(8),
      allowNull: false,
      validate: {
        isNumeric: true,
        len: [8, 8]
      }
    }
  }, {
    sequelize,
    modelName: 'Persona',
  });
  return Persona;
};