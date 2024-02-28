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

const router = Router();

router.post('/', createDish);
router.put('/:dishId', updateDish);
router.delete('/:dishId', deleteDish);
router.get('/:dishId', getDish);
router.get('/', getDishes);
router.post('/:dishId/comment', writeComment);
router.get('/:dishId/comments', getComments);

module.exports = router;
