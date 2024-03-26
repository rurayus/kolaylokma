const Restaurant = require('../models/restaurants')

exports.getIndex = (req,res,next)=>{
    const restaurants = Restaurant.getAll(); 
    res.render('users/index', {
        restaurants:JSON.stringify(restaurants),
        path:'/'});
}

exports.getAbout = (req,res,next)=>{
    res.render('users/about', {
        path:'/'});
}

exports.getLogin = (req,res,next)=>{
    res.render('account/login', {
        path:'/'});
}

exports.getRegister = (req,res,next)=>{
    res.render('account/register', {
        path:'/'});
}