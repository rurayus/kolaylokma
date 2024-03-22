const express = require('express');
const router = express.Router();

const usersController = require('../controllers/users')

router.get('/', usersController.getIndex);
router.get('/hakkimizda', usersController.getAbout);
router.get('/login', usersController.getLogin);
router.get('/register', usersController.getRegister);
router.post('/login', usersController.postLogin);
router.post('/register', usersController.postRegister);

module.exports = router;