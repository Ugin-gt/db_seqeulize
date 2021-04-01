'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('Phones', {
      id: {
        primaryKey: true,
        allowNull: false,
        autoIncrement: true,
        type: Sequelize.INTEGER,
      },
      brand: {
        allowNull: false,
        type: Sequelize.STRING(90),
      },
      model: {
        allowNull: false,
        type: Sequelize.STRING(90),
      },
      price: {
        allowNull: false,
        type: Sequelize.NUMERIC(10, 2),
      },
      quantity: {
        type: Sequelize.INTEGER,
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
    await queryInterface.dropTable('Phones');
  },
};
