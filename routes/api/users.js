const express = require('express');

const router = express.Router();
const usersCtrl = require('../../controllers/api/users');
const ensureLoggedIn = require('../../config/ensureLoggedIn');

router.get('/check-token', ensureLoggedIn, userCtrl.checkToken);
router.get('/check-token', usersCtrl.checkToken);
router.post('/', usersCtrl.create);
router.post('/login', usersCtrl.login);

module.exports = router
