const Restaurant = require('../models/restaurants')

exports.getIndex = (req, res, next) => {
    const restaurants = Restaurant.getAll();
    res.render('users/index', {
        restaurants: restaurants,
        path: '/',
        title: 'Kolaylokma - Ne yesek diye düşünme derdine son!'
    });
}

exports.getAbout = (req, res, next) => {
    res.render('users/about', {
        path: '/',
        title: 'Kolaylokma - Hakkımızda'
    });
}

exports.getLogin = (req, res, next) => {
    res.render('account/login', {
        path: '/',
        title: 'Kolaylokma - Giriş Yap'
    });
}

exports.getRegister = (req, res, next) => {
    res.render('account/register', {
        path: '/',
        title: 'Kolaylokma - Kayıt Ol'
    });
}