import { Router } from 'express';
import RegisterController from '../controllers/register';

const router = new Router();

router.get('/', RegisterController.index);
router.post('/', RegisterController.store);

export default router;
