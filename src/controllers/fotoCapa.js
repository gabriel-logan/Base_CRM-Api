/* eslint-disable camelcase */
import multer from 'multer';

import multerConfig from '../config/multerConfig';

import FotoCapa from '../models/FotoCapa';
import User from '../models/User';

const upload = multer(multerConfig).single('formFotoCapa');

class FotoCapaController {
  store(req, res) {
    return upload(req, res, async (err) => {
      if (err) {
        return res.status(400).json({
          Failed: [err],
        });
      }
      try {
        const { originalname, filename } = req.file;

        console.log(req.body);

        const { user_id } = req.body;

        const verifyExistUser = await User.findByPk(user_id);

        if (!verifyExistUser) {
          return res.json('Este usuario não existe');
        }

        const foto = await FotoCapa.create({ originalname, filename, user_id });

        return res.json(foto);
      } catch (error) {
        return res.status(401).json(error);
      }
    });
  }
}

export default new FotoCapaController();
