'use strict';
const { Model } = require('sequelize');
const { isAfter } = require('date-fns');
module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate (models) {
      // define association here
    }
  }
  User.init(
    {
      firstName: {
        field: 'first_name',
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          notNull: true,
          notEmpty: true,
        },
      },
      lastName: {
        field: 'last_name',
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          notNull: true,
          notEmpty: true,
        },
      },
      email: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
        validate: {
          notNull: true,
          notEmpty: true,
          isEmail: true,
        },
      },
      password: {
        field: 'password_hash',
        type: DataTypes.TEXT,
        allowNull: false,
        validate: {
          notNull: true,
          notEmpty: true,
        },
      },
      isMale: {
        field: 'is_male',
        type: DataTypes.BOOLEAN,
      },

      birthday: {
        type: DataTypes.DATEONLY,
        validate: {
          isDate: true,
          isCorrect (value) {
            if (isAfter(new Date(value), new Date())) {
              throw new Error('Enter a valid date');
            }
          },
        },
      },
    },
    {
      sequelize,
      modelName: 'User',
      tableName: 'users',
      underscored: true,
    }
  );
  return User;
};
