const express = require('express');
const router = express.Router();

const usersController = require('../controllers/users')

router.get('/',usersController.getIndex);
router.get('/hakkimizda',usersController.getAbout);
router.get('/login',usersController.getLogin);
router.get('/register',usersController.getRegister);

module.exports = router;