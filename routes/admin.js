const express = require('express');
const router = express.Router();

const adminController = require('../controllers/admin')

router.get('/restaurants',adminController.getRestaurant);
router.get('/add-restaurant',adminController.getAddRestaurant);
router.post('/add-restaurant',adminController.postAddRestaurant);
router.get('/restaurants/:restaurantid',adminController.getEditRestaurant);
router.post('/restaurants',adminController.postEditRestaurant);
router.post('/delete-restaurant',adminController.postDeleteRestaurant);

module.exports = router;