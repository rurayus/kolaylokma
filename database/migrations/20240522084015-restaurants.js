'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.createTable('restaurants', {
      id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true
      },
      name: {
        type: Sequelize.STRING,
        allowNull: false,
        unique: true
      },
      lat: {
        type: Sequelize.DOUBLE,
        allowNull: false
      },
      long: {
        type: Sequelize.DOUBLE,
        allowNull: false
      },
      menu: {
        type: Sequelize.INTEGER,
        allowNull: false,
        unique: false
      }
    });
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.dropTable('restaurants');
  }
};
