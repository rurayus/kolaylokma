const Restaurants = require("../models/restaurants");

exports.getDeneme = (req,res,next)=>{
    res.render('admin/deneme', {
        path:'/admin/deneme'});
}

exports.getRestaurant = (req,res,next)=>{
    const restaurants = Restaurants.getAll();
    res.render('admin/restaurants', {
        restaurants:restaurants,
        path:'/admin/restaurants',
        action: req.query.action
    });
}

exports.getAddRestaurant = (req,res,next)=>{
    res.render('admin/add-restaurant', {
        path:'/admin/add-restaurant'});
}

exports.postAddRestaurant = (req,res,next)=>{
    const restaurant = new Restaurants();

    restaurant.name = req.body.name;
    restaurant.location = req.body.location;
    restaurant.icon = req.body.icon;
    restaurant.menu = req.body.menu;

    restaurant.saveRestaurant();
    res.redirect('/');
}

exports.getEditRestaurant = (req,res,next)=>{

    const restaurant = Restaurants.getById(req.params.restaurantid);

    res.render('admin/edit-restaurant', {
        path:'/admin/add-restaurant',
        restaurant: restaurant
    });
}

exports.postEditRestaurant = (req,res,next)=>{

    const restaurant = Restaurants.getById(req.body.id);

    restaurant.name = req.body.name;
    restaurant.location = req.body.location;
    restaurant.icon = req.body.icon;
    restaurant.menu = req.body.menu;

    restaurant.Update(restaurant);
    res.redirect('/admin/restaurants?action=edit');
}

exports.postDeleteProduct = (req,res,next)=>{
    Restaurants.DeleteById(req.body.id);
    res.redirect('/admin/restaurants?action=delete');
}