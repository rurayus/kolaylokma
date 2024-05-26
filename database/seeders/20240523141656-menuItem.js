'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    console.log('Seeding MenuItems...');
    await queryInterface.bulkInsert('menu-items', [
      { id: 1, name: 'Pizza', price: 9.99, menu: 1, kategori: 'Pizza' },
      { id: 2, name: 'Burger', price: 5.99, menu: 2, kategori: 'Burger' },
      { id: 3, name: 'Salata', price: 4.99, menu: 3, kategori: 'Salata' },
      { id: 4, name: 'Pasta', price: 7.99, menu: 4, kategori: 'Tatlı' }
    ], {});
  },

  async down(queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  }
};
