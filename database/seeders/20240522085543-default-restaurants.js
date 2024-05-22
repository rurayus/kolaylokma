'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('restaurants', [
      {id:"11111", name:'Restoran 1', lat:41.4507,long:31.7627, menu:'1' },
      {id:"11112", name:'Restoran 2', lat:41.4517,long:31.7627, menu:'2' },
      {id:"11113", name:'Restoran 3', lat:41.4527,long:31.7627, menu:'3' },
      {id:"11114", name:'Restoran 4', lat:41.4517,long:31.7637, menu:'4' }
  ], {});
  },

  async down (queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  }
};
