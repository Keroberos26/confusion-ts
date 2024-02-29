const { Router } = require('express');
const { login, signup, logout } = require('../app/controllers/auth');
const passport = require('passport');

const router = Router();

router.post('/login', login);
router.get('/logout', logout);
router.post('/signup', signup);

module.exports = router;
