const { Sequelize, DataTypes } = require('sequelize');
const sequelize = require('../config/database');

const Restaurant = sequelize.define('Restaurant', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    name: {
        type: DataTypes.STRING,
        allowNull: false
    },
    description: {
        type: DataTypes.TEXT
    },
    address: {
        type: DataTypes.STRING
    },
    phoneNumber: {
        type: DataTypes.STRING
    },
    // Diğer alanları buraya ekleyebilirsiniz
}, {
    tableName: 'restaurants' // Veritabanında hangi tabloya karşılık geldiğini belirtiyoruz
});

module.exports = Restaurant;
