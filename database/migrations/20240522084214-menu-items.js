'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {

    await queryInterface.createTable('menu-items', {
      id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true
      },
      name: {
        type: Sequelize.STRING,
        allowNull: false
      },
      price: {
        type: Sequelize.FLOAT,
        allowNull: false
      },
      menu: {
        type: Sequelize.INTEGER,
        allowNull: false,
        unique: true
      },
      kategori: {
        type: Sequelize.STRING,
        allowNull: false
      },
      sequelize,
      modelName: 'MenuItem', // Model adı
      tableName: 'menu-items', // Tablo adı (bu tablo adı ile eşleştirme yapmak önemli)

    });

  },

  async down(queryInterface, Sequelize) {

    await queryInterface.dropTable('menu-items');
  }
};
