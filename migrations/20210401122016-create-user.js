'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('users', {
      id: {
        primaryKey: true,
        allowNull: false,
        autoIncrement: true,
        type: Sequelize.INTEGER,
      },
      firstName: {
        field: 'first_name',
        type: Sequelize.STRING(128),
        allowNull: false,
      },
      lastName: {
        field: 'last_name',
        type: Sequelize.STRING(128),
        allowNull: false,
      },
      email: {
        type: Sequelize.STRING,
        allowNull: false,
        unique: true,
      },
      password: {
        field: 'password_hash',
        type: Sequelize.TEXT,
        allowNull: false,
      },
      isMale: {
        field: 'is_male',
        type: Sequelize.BOOLEAN,
      },
      birthday: {
        type: Sequelize.DATEONLY,
      },
      createdAt: {
        field: 'created_at',
        allowNull: false,
        type: Sequelize.DATE,
      },
      updatedAt: {
        field: 'updated_at',
        allowNull: false,
        type: Sequelize.DATE,
      },
    });
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('users');
  },
};
