const db = require('../database');
const { Sequelize } = db.Sequelize;

const MenuItem = db.define('MenuItem', {
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
  restaurantId: {
    type: Sequelize.INTEGER,
    references: {
      model: 'restaurants',
      key: 'id'
    },
    onDelete: 'CASCADE',
    onUpdate: 'CASCADE'
  }
}, {
  timestamps: false // Bu alanı eklediğimizde Sequelize createdAt ve updatedAt alanlarını otomatik olarak eklemez
});

module.exports = MenuItem;
