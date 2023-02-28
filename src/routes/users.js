import { Router } from 'express';
import UsersController from '../controllers/users';
import verifyLogin from '../middlewares/verifyLogin';

const router = new Router();

router.get('/', UsersController.index);
router.get('/:id', UsersController.show);
router.put('/', verifyLogin, UsersController.update);
router.delete('/', verifyLogin, UsersController.delete);

export default router;
