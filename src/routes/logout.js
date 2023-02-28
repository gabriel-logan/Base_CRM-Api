import { Router } from 'express';
import LogoutController from '../controllers/logout';
import verifyLogin from '../middlewares/verifyLogin';

const router = new Router();

router.post('/', verifyLogin, LogoutController.store);

export default router;
