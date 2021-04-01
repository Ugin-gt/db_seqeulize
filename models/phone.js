'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Phone extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate (models) {
      // define association here
    }
  }
  Phone.init(
    {
      brand: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          notNull: true,
          notEmpty: true,
        },
      },
      model: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          notNull: true,
          notEmpty: true,
        },
      },
      price: {
        type: DataTypes.NUMERIC,
        allowNull: false,
        validate: {
          notNull: true,
          notEmpty: true,
        },
      },
      quantity: {
        type: DataTypes.INTEGER,

        validate: {
          notEmpty: true,
        },
      },
    },
    {
      sequelize,
      modelName: 'Phone',
    }
  );
  return Phone;
};
