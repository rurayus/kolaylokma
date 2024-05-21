const Restaurant = require('./restaurant');
const MenuItem = require('./menuItem');

// Bir restoranın birçok menü öğesi vardır
Restaurant.hasMany(MenuItem, { foreignKey: 'restaurantId' });
// Her menü öğesi bir restorana aittir
MenuItem.belongsTo(Restaurant, { foreignKey: 'restaurantId' });

module.exports = { Restaurant, MenuItem };
