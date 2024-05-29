const db = require('../database');
const { Sequelize } = db.Sequelize;

const Restaurant = db.define('Restaurant',
  {
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
    mahalle: {
      type: Sequelize.STRING,
      allowNull: false,
      unique: true
    },
    puan: {
      type: Sequelize.DOUBLE,
      allowNull: false
    },
    lat: {
      type: Sequelize.DOUBLE,
      allowNull: false
    },
    long: {
      type: Sequelize.DOUBLE,
      allowNull: false
    },
  },
  {
    timestamps: false,
    underscored: true,
  }
);

module.exports = Restaurant;