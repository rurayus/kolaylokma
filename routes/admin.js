const express = require('express');
const router = express.Router();

const adminController = require('../controllers/admin')

router.get('/restaurants', adminController.getRestaurant);
router.get('/add-restaurant', adminController.getAddRestaurant);
router.post('/add-restaurant', adminController.postAddRestaurant);
router.get('/restaurants/:restaurantid', adminController.getEditRestaurant);
router.post('/restaurants', adminController.postEditRestaurant);
router.post('/delete-restaurant', adminController.postDeleteRestaurant);

router.get('/restaurants/:restaurantid/menu', adminController.getMenuItems);
router.get('/add-menu', adminController.getAddMenuItems);
router.get('/add-menu/:restaurantid', adminController.getAddMenuItems);
router.post('/add-menu', adminController.postAddMenuItems);
router.get('/menus/:menuid', adminController.getEditMenuItems);
router.post('/menus', adminController.postEditMenuItems);
router.post('/delete-menu', adminController.postDeleteMenuItems);

module.exports = router;