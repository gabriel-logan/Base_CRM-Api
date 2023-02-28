import { Router } from 'express';
import LoginController from '../controllers/login';

const router = new Router();

router.get('/', LoginController.index);
router.post('/', LoginController.store);

export default router;
