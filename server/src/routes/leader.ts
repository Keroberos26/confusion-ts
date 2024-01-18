import { Request, Response, Router } from 'express';
import { createLeader, deleteLeader, getLeader, getLeaders, updateLeader } from '../app/controllers/leader';

const router = Router();

router.post('/', createLeader);
router.put('/:leaderId', updateLeader);
router.delete('/:leaderId', deleteLeader);
router.get('/:leaderId', getLeader);
router.get('/', getLeaders);

export default router;
