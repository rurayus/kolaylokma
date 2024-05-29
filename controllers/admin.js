const Restaurant = require('../models/restaurants');
const MenuItems = require('../models/menuItem');
const User = require('../models/user');
const { MAHALLELER, KATEGORILER } = require('../constants');

exports.getRestaurant = async (req, res, next) => {
    if (!req.userRecord) {
        return res.redirect('/login');
    } else if (req.userRecord.role != 'admin') {
        return res.redirect('/');
    }

    const restaurants = await Restaurant.findAll({ raw: true });
    res.render('admin/restaurants', {
        restaurants: restaurants,
        path: '/admin/restaurants',
        action: req.query.action,
        title: 'Kolaylokma - Restoranlar'
    });
}

exports.getAddRestaurant = async (req, res, next) => {
    if (!req.userRecord) {
        return res.redirect('/login');
    } else if (req.userRecord.role != 'admin') {
        return res.redirect('/');
    }

    res.render('admin/add-restaurant', {
        mahalleler: MAHALLELER,
        path: '/admin/add-restaurant',
        title: 'Kolaylokma - Restoran Ekle'
    });
}

exports.postAddRestaurant = async (req, res, next) => {
    if (!req.userRecord) {
        return res.redirect('/login');
    } else if (req.userRecord.role != 'admin') {
        return res.redirect('/');
    }

    let puan = Math.random() * 5;
    const restaurant = {
        name: req.body.name,
        lat: req.body.lat,
        long: req.body.long,
        mahalle: req.body.mahalle,
        puan: puan.toFixed(1)
    }

    await Restaurant.create(restaurant);

    res.redirect('/admin/restaurants?action=add');
}

exports.getEditRestaurant = async (req, res, next) => {
    if (!req.userRecord) {
        return res.redirect('/login');
    } else if (req.userRecord.role != 'admin') {
        return res.redirect('/');
    }

    const restaurant = await Restaurant.findOne({ where: { id: req.params.restaurantid }, raw: true });
    if (!restaurant) {
        return res.redirect('/admin/restaurants');
    }
    res.render('admin/edit-restaurant', {
        path: '/admin/edit-restaurant',
        restaurant: restaurant,
        mahalleler: MAHALLELER,
        title: 'Kolaylokma - Restoran Düzenle'
    });
}

exports.postEditRestaurant = async (req, res, next) => {
    if (!req.userRecord) {
        return res.redirect('/login');
    } else if (req.userRecord.role != 'admin') {
        return res.redirect('/');
    }

    const restaurant = await Restaurant.findOne({ where: { id: req.body.id }, raw: true });

    restaurant.name = req.body.name;
    restaurant.lat = req.body.lat;
    restaurant.long = req.body.long;
    restaurant.mahalle = req.body.mahalle;

    await Restaurant.update(restaurant, { where: { id: req.body.id } });

    res.redirect('/admin/restaurants?action=edit');
}

exports.postDeleteRestaurant = async (req, res, next) => {
    if (!req.userRecord) {
        return res.redirect('/login');
    } else if (req.userRecord.role != 'admin') {
        return res.redirect('/');
    }

    await Restaurant.destroy({ where: { id: req.body.restaurantid } });
    res.redirect('/admin/restaurants?action=delete');
}

exports.getMenuItems = async (req, res, next) => {
    if (!req.userRecord) {
        return res.redirect('/login');
    } else if (req.userRecord.role != 'admin') {
        return res.redirect('/');
    }

    const restaurant = await Restaurant.findOne({ where: { id: req.params.restaurantid }, raw: true });
    if (!restaurant) {
        return res.redirect('/admin/restaurants');
    }
    const menuItems = await MenuItems.findAll({ where: { restaurantId: restaurant.id }, raw: true });

    restaurant.menu = menuItems;

    // if (menuItems.length == 0) {
    //     return res.redirect('/admin/restaurants');
    // }
    res.render('admin/menus', {
        restaurant: restaurant,
        path: '/admin/menus',
        action: req.query.action,
        title: 'Kolaylokma - Menüler'
    });
}

exports.getAddMenuItems = async (req, res, next) => {
    if (!req.userRecord) {
        return res.redirect('/login');
    } else if (req.userRecord.role != 'admin') {
        return res.redirect('/');
    }

    var restaurants;
    if (req.params.restaurantid == undefined) {
        restaurants = await Restaurant.findAll({ raw: true });
    } else {
        let restaurant = await Restaurant.findOne({ where: { id: req.params.restaurantid }, raw: true });
        if (!restaurant) {
            return res.redirect('/admin/restaurants');
        }
        restaurants = [restaurant];
    }

    if (restaurants.length == 0) {
        return res.redirect('/admin/restaurants');
    }

    res.render('admin/add-menu', {
        path: '/admin/add-menu',
        restaurants: restaurants,
        kategoriler: KATEGORILER,
        title: 'Kolaylokma - Menü Ekle'
    });
}

exports.postAddMenuItems = async (req, res, next) => {
    if (!req.userRecord) {
        return res.redirect('/login');
    } else if (req.userRecord.role != 'admin') {
        return res.redirect('/');
    }

    const menuItem = {
        restaurantId: req.body.restaurantid,
        name: req.body.name,
        price: req.body.price,
        kategori: req.body.kategori
    }

    await MenuItems.create(menuItem);

    res.redirect('/admin/restaurants/' + req.body.restaurantid + '/menu?action=add');
}

exports.getEditMenuItems = async (req, res, next) => {
    if (!req.userRecord) {
        return res.redirect('/login');
    } else if (req.userRecord.role != 'admin') {
        return res.redirect('/');
    }

    const menuItem = await MenuItems.findOne({ where: { id: req.params.menuid }, raw: true });
    const restaurants = await Restaurant.findAll({ raw: true });

    res.render('admin/edit-menu', {
        path: '/admin/edit-menu',
        menu: menuItem,
        restaurants: restaurants,
        kategoriler: KATEGORILER,
        title: 'Kolaylokma - Menü Düzenle'
    });
}

exports.postEditMenuItems = async (req, res, next) => {
    if (!req.userRecord) {
        return res.redirect('/login');
    } else if (req.userRecord.role != 'admin') {
        return res.redirect('/');
    }

    const menuItem = await MenuItems.findOne({ where: { id: req.body.menuid }, raw: true });

    menuItem.name = req.body.name;
    menuItem.price = req.body.price;
    menuItem.kategori = req.body.kategori;
    menuItem.restaurantId = req.body.restid;

    await MenuItems.update(menuItem, { where: { id: req.body.menuid } });
    res.redirect('/admin/restaurants/' + req.body.restid + '/menu?action=edit');
}

exports.postDeleteMenuItems = async (req, res, next) => {
    if (!req.userRecord) {
        return res.redirect('/login');
    } else if (req.userRecord.role != 'admin') {
        return res.redirect('/');
    }

    await MenuItems.destroy({ where: { id: req.body.menuid } });
    res.redirect('/admin/restaurants/' + req.body.restid + '/menu?action=delete');
}