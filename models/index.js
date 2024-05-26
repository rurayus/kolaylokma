const Restaurant = require('./restaurant');
const MenuItems = require('./menuItem');

// Bir restoranın birçok menü öğesi vardır
Restaurant.hasMany(MenuItems, { foreignKey: 'restaurantId' });
// Her menü öğesi bir restorana aittir
MenuItems.belongsTo(Restaurant, { foreignKey: 'restaurantId' });

module.exports = { Restaurant, MenuItems };
