const { Router } = require('express');
const { createLeader, updateLeader, deleteLeader, getLeader, getLeaders } = require('../app/controllers/leader');

const router = Router();

router.post('/', createLeader);
router.put('/:leaderId', updateLeader);
router.delete('/:leaderId', deleteLeader);
router.get('/:leaderId', getLeader);
router.get('/', getLeaders);

module.exports = router;
