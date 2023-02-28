import { Router } from 'express';
import HomeController from '../controllers/home';
// eslint-disable-next-line no-unused-vars
import verifyLogin from '../middlewares/verifyLogin';

const router = new Router();

router.get('/', HomeController.index);

export default router;
