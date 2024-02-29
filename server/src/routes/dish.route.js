const { Router } = require('express');
const {
  createDish,
  deleteDish,
  updateDish,
  getDish,
  getDishes,
  getComments,
  writeComment,
} = require('../app/controllers/dish');
const authenticate = require('../config/auth');

const router = Router();

router.post('/', authenticate.verifyUser, createDish);
router.put('/:dishId', authenticate.verifyUser, updateDish);
router.delete('/:dishId', authenticate.verifyUser, deleteDish);
router.get('/:dishId', authenticate.verifyUser, getDish);
router.get('/', authenticate.verifyUser, getDishes);
router.post('/:dishId/comment', writeComment);
router.get('/:dishId/comments', getComments);

module.exports = router;
