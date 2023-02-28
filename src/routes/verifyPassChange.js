import { Router } from 'express';
import verifyPassChange from '../controllers/verifyPassChange';

const router = new Router();

router.post('/', verifyPassChange.store);

export default router;
