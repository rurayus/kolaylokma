const Restaurant = require('../models/restaurants');
const MenuItem = require('../models/menu');



exports.getRestaurant = async (req, res, next) => {
    const restaurants = await Restaurant.findAll({raw: true});
    res.render('admin/restaurants', {
        restaurants: restaurants,
        path: '/admin/restaurants',
        action: req.query.action,
        title: 'Kolaylokma - Restoranlar'
    });
}

exports.getAddRestaurant = (req, res, next) => {
    res.render('admin/add-restaurant', {
        path: '/admin/add-restaurant',
        title: 'Kolaylokma - Restoran Ekle'
    });
}

exports.postAddRestaurant = (req, res, next) => {
    const restaurant = new Restaurant();

    restaurant.name = req.body.name;
    restaurant.lat = req.body.lat;
    restaurant.long = req.body.long;
    restaurant.menu = req.body.menu;

    restaurant.saveRestaurant();
    res.redirect('/admin/restaurants');
}

exports.getEditRestaurant = (req, res, next) => {

    const restaurant = Restaurant.getById(req.params.restaurantid);

    res.render('admin/edit-restaurant', {
        path: '/admin/restaurants',
        restaurant: restaurant,
        title: 'Kolaylokma - Restoran Düzenle'
    });
}

exports.postEditRestaurant = (req, res, next) => {

    console.log(req.body)
    
    const restaurant = Restaurant.getById(req.body.id);

    restaurant.name = req.body.name;
    restaurant.lat = req.body.lat;
    restaurant.long = req.body.long;
    restaurant.menu = req.body.menu;

    Restaurant.Update(restaurant);
    res.redirect('/admin/restaurants?action=edit');
}

exports.postDeleteRestaurant = (req, res, next) => {
    Restaurant.DeleteById(req.body.restaurantid);
    res.redirect('/admin/restaurants?action=delete');
}

exports.getMenuItems = (req, res, next) => {
    const menuItems = MenuItem.getAll();
    res.render('admin/menus', {
        menuItems: menuItems,
        path: '/admin/menus',
        action: req.query.action,
        title: 'Kolaylokma - Menüler'
    });
}

exports.getAddMenuItems = (req, res, next) => {
    res.render('admin/add-menu', {
        path: '/admin/add-menu',
        title: 'Kolaylokma - Menü Ekle'
    });
}

exports.postAddMenuItems = (req, res, next) => {
    const menuItem = new MenuItem();

    menuItem.restaurant_id = req.body.restaurant_id;
    menuItem.item_name = req.body.item_name;
    menuItem.item_price = req.body.item_price;

    menuItem.saveMenuItems();
    res.redirect('/admin/menus');
}

exports.getEditMenuItems = (req, res, next) => {

    const menuItem = MenuItem.getById(req.params.menuItemsid);

    res.render('admin/edit-menu', {
        path: '/admin/menus',
        menuItem: menuItem,
        title: 'Kolaylokma - Menü Düzenle'
    });
}

exports.postEditMenuItems = (req, res, next) => {

    console.log(req.body)
    
    const menuItem = MenuItem.getById(req.body.id);

    menuItem.restaurant_id = req.body.restaurant_id;
    menuItem.item_name = req.body.item_name;
    menuItem.item_price = req.body.item_price;

    MenuItem.Update(menuItem);
    res.redirect('/admin/menus?action=edit');
}

exports.postDeleteMenuItems = (req, res, next) => {
    MenuItem.DeleteById(req.body.menuItemsid);
    res.redirect('/admin/menus?action=delete');
}