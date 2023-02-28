"use strict";Object.defineProperty(exports, "__esModule", {value: true}); function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }var _User = require('../models/User'); var _User2 = _interopRequireDefault(_User);

class RegisterController {
  index(req, res) {
    return res.status(204).end('Register page');
  }

  async store(req, res) {
    console.log(req.body);
    const { name } = req.body;
    const { password } = req.body;
    try {
      await _User2.default.create({ nome: name, password });
      return res.status(200).json({ success: ['Conta criada com sucesso'] });
    } catch (error) {
      return res.status(400).json({ errors: [error.errors[0].message] });
    }
  }
}

exports. default = new RegisterController();
