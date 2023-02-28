"use strict";Object.defineProperty(exports, "__esModule", {value: true}); function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }/* eslint-disable camelcase */
var _Lead = require('../models/Lead'); var _Lead2 = _interopRequireDefault(_Lead);

class LeadController {
  async index(req, res) {
    const leads = await _Lead2.default.findAll({
      attributes: ['id', 'empresa', 'valores', 'cidade', 'captacao', 'nome', 'email', 'user_id'],
    });

    return res.status(200).json(leads);
  }

  async store(req, res) {
    try {
      const { empresa } = req.body;
      const { valores } = req.body;
      const { cidade } = req.body;
      const { captacao } = req.body;
      const { nome } = req.body;
      const email = req.body.contato;
      const user_id = req.body.userId;
      await _Lead2.default.create({
        empresa, valores, cidade, captacao, nome, email, user_id,
      });
      return res.status(200).json({ success: ['Lead criada com sucesso'] });
    } catch (error) {
      return res.status(400).json({ errors: [error.errors[0].message] });
    }
  }
}

exports. default = new LeadController();
