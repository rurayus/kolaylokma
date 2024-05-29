const db = require('../database');
const { Sequelize } = db.Sequelize;

const MenuItem = db.define('menu_items', {
  id: {
    type: Sequelize.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  restaurantId: {
    type: Sequelize.INTEGER,
    allowNull: false,
    unique: true
  },
  name: {
    type: Sequelize.STRING,
    allowNull: false
  },
  price: {
    type: Sequelize.FLOAT,
    allowNull: false
  },
  kategori: {
    type: Sequelize.STRING,
    allowNull: false
  }
}, {
  timestamps: false,
  underscored: true
});

module.exports = MenuItem;
