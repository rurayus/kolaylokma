const express = require('express');
const router = express.Router();

const adminController = require('../controllers/admin')

router.get('/deneme',adminController.getDeneme);
router.get('/restaurants',adminController.getRestaurant);
router.get('/add-restaurant',adminController.getAddRestaurant);
router.get('/edit-restaurant',adminController.getEditRestaurant);

module.exports = router;