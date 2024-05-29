const db = require('../database');
const { Sequelize } = db.Sequelize;

const User = db.define('User',
    {
        id: {
            type: Sequelize.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        email: {
            type: Sequelize.STRING,
            allowNull: false
        },
        password: {
            type: Sequelize.STRING,
            allowNull: false
        },
        role: {
            type: Sequelize.STRING,
            allowNull: false,
            defaultValue: 'user'
        },
    },
    {
        timestamps: false
    }
);

module.exports = User;