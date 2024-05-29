'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert('restaurants', [
      {
        id: 1,
        name: 'Restoran 1',
        mahalle: 'Yeşil Mahalle',
        puan: 4.5,
        lat: 41.4682,
        long: 31.8056,
      },
      {
        id: 2,
        name: 'Restoran 2',
        mahalle: 'Yeni Mahalle',
        puan: 3.5,
        lat: 41.4716,
        long: 31.8133,
      },
      {
        id: 3,
        name: 'Restoran 3',
        mahalle: 'Terekki',
        puan: 3.8,
        lat: 41.4516,
        long: 31.7861,
      },
      {
        id: 4,
        name: 'Restoran 4',
        mahalle: 'Tepebaşı',
        puan: 2.2,
        lat: 41.4632,
        long: 31.8031,
      },
      {
        id: 5,
        name: 'Restoran 5',
        mahalle: 'On Temmuz',
        puan: 4.8,
        lat: 41.4474,
        long: 31.7911,
      },
      {
        id: 6,
        name: 'Restoran 6',
        mahalle: 'Mithatpaşa',
        puan: 4.9,
        lat: 41.4529,
        long: 31.7963,
      },
      {
        id: 7,
        name: 'Restoran 7',
        mahalle: 'Meşrutiyet',
        puan: 3.3,
        lat: 41.4567,
        long: 31.7927,
      },
      {
        id: 8,
        name: 'Restoran 8',
        mahalle: 'Karaelmas',
        puan: 3.2,
        lat: 41.4488,
        long: 31.7977,
      },
      {
        id: 9,
        name: 'Restoran 9',
        mahalle: 'İncivez',
        puan: 4.3,
        lat: 41.4501,
        long: 31.7648,
      },
      {
        id: 10,
        name: 'Restoran 10',
        mahalle: 'İnağzı',
        puan: 4.5,
        lat: 41.4777,
        long: 31.8212,
      },
      {
        id: 11,
        name: 'Restoran 11',
        mahalle: 'Dilaver',
        puan: 1.7,
        lat: 41.4526,
        long: 31.8367,
      },
      {
        id: 12,
        name: 'Restoran 12',
        mahalle: 'Çınartepe',
        puan: 2.9,
        lat: 41.4497,
        long: 31.8156,
      },
      {
        id: 13,
        name: 'Restoran 13',
        mahalle: 'Çaydamar',
        puan: 3.0,
        lat: 41.4442,
        long: 31.7969,
      },
      {
        id: 14,
        name: 'Restoran 14',
        mahalle: 'Baştarla',
        puan: 1.0,
        lat: 41.4553,
        long: 31.8169,
      },
      {
        id: 15,
        name: 'Restoran 15',
        mahalle: 'Birlik',
        puan: 2.5,
        lat: 41.4386,
        long: 31.7949,
      },
      {
        id: 16,
        name: 'Restoran 16',
        mahalle: 'Bağlık',
        puan: 1.3,
        lat: 41.4598,
        long: 31.8224
      },
      {
        id: 17,
        name: 'Restoran 17',
        mahalle: 'Bahçelievler',
        puan: 3.2,
        lat: 41.4500,
        long: 31.7740
      },
      {
        id: 18,
        name: 'Restoran 18',
        mahalle: 'Asma',
        puan: 4.6,
        lat: 41.4502,
        long: 31.8299
      },
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
