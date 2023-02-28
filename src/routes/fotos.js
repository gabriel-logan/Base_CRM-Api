import { Router } from 'express';

import fotoProfileController from '../controllers/fotoProfile';
import fotoCapaController from '../controllers/fotoCapa';

import verifyLogin from '../middlewares/verifyLogin';

const router = new Router();

router.post('/profile', verifyLogin, fotoProfileController.store);
router.post('/capa', verifyLogin, fotoCapaController.store);

export default router;
