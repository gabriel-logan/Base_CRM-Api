"use strict";Object.defineProperty(exports, "__esModule", {value: true}); function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }var _jsonwebtoken = require('jsonwebtoken'); var _jsonwebtoken2 = _interopRequireDefault(_jsonwebtoken);
var _User = require('../models/User'); var _User2 = _interopRequireDefault(_User);

class LoginController {
  index(req, res) {
    return res.status(204).send('FAZER LOGIN PAGE');
  }

  async store(req, res) {
    const { name } = req.body;
    const { password } = req.body;
    try {
      const userExist = await _User2.default.findOne({ where: { nome: name } });
      if (!userExist) {
        return res.status(400).json({ errors: ['Usuario não existe'] });
      }

      if (!(await userExist.passwordIsValid(password))) {
        return res.status(401).json({ errors: ['Senha invalida'] });
      }

      const { id } = userExist;

      const token = _jsonwebtoken2.default.sign(
        { id, name },
        process.env.TOKEN_SECRET,
        { expiresIn: process.env.TOKEN_EXPIRATION },
      );

      return res.status(200).json({ Token: token, name, id });
    } catch (error) {
      console.log(error);
      return res.status(400).json({ errors: ['Error desconhecido'] });
    }
  }
}

exports. default = new LoginController();
