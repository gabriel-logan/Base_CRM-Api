"use strict";Object.defineProperty(exports, "__esModule", {value: true}); function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }/* eslint-disable camelcase */
var _multer = require('multer'); var _multer2 = _interopRequireDefault(_multer);

var _multerConfig = require('../config/multerConfig'); var _multerConfig2 = _interopRequireDefault(_multerConfig);

var _FotoCapa = require('../models/FotoCapa'); var _FotoCapa2 = _interopRequireDefault(_FotoCapa);
var _User = require('../models/User'); var _User2 = _interopRequireDefault(_User);

const upload = _multer2.default.call(void 0, _multerConfig2.default).single('formFotoCapa');

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

        const verifyExistUser = await _User2.default.findByPk(user_id);

        if (!verifyExistUser) {
          return res.json('Este usuario não existe');
        }

        const foto = await _FotoCapa2.default.create({ originalname, filename, user_id });

        return res.json(foto);
      } catch (error) {
        return res.status(401).json(error);
      }
    });
  }
}

exports. default = new FotoCapaController();
