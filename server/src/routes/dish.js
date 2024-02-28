const { Router } = require('express');
const { createDish } = require('../app/controllers/dish');

const router = Router();

router.get('/', createDish);

module.exports = router;
