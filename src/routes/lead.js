import { Router } from 'express';

import lead from '../controllers/lead';

import verifyLogin from '../middlewares/verifyLogin';

const router = new Router();

router.get('/', lead.index);
router.post('/', verifyLogin, lead.store);

export default router;
