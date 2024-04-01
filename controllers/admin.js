const Restaurant = require('../models/restaurants');

exports.getRestaurant = (req, res, next) => {
    const restaurants = Restaurant.getAll();
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
    restaurant.icon = req.body.icon;
    restaurant.menu = req.body.menu;

    restaurant.saveRestaurant();
    res.redirect('/');
}

exports.getEditRestaurant = (req, res, next) => {

    const restaurant = Restaurant.getById(req.params.restaurantid);

    res.render('admin/edit-restaurant', {
        path: '/admin/add-restaurant',
        restaurant: restaurant,
        title: 'Kolaylokma - Restoran Düzenle'
    });
}

exports.postEditRestaurant = (req, res, next) => {

    const restaurant = Restaurant.getById(req.body.id);

    restaurant.name = req.body.name;
    restaurant.lat = req.body.lat;
    restaurant.long = req.body.long;
    restaurant.icon = req.body.icon;
    restaurant.menu = req.body.menu;

    restaurant.Update(restaurant);
    res.redirect('/admin/restaurants?action=edit');
}

exports.postDeleteRestaurant = (req, res, next) => {
    Restaurants.DeleteById(req.body.id);
    res.redirect('/admin/restaurants?action=delete');
}