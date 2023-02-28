import multer from 'multer';
import { extname, resolve } from 'path';

const aleatorio = () => Math.floor(Math.random() * 10000 + 10000);

const jpeg = 'image/jpeg';
const png = 'image/png';

const maxSize = 8 * 1024 * 1024;

export default {
  limits: { fileSize: maxSize },
  fileFilter: (req, file, cb) => {
    if (file.mimetype !== png && file.mimetype !== jpeg) {
      return cb(new multer.MulterError('Precisa ser uma imagem'));
    }
    return cb(null, true);
  },
  storage: multer.diskStorage({
    destination: (req, file, cb) => {
      cb(null, resolve(__dirname, '..', '..', 'uploads', 'images'));
    },
    filename: (req, file, cb) => {
      cb(null, `${Date.now()}_${aleatorio()}${extname(file.originalname)}`);
    },
  }),
};
