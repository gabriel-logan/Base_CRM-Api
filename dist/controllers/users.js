"use strict";Object.defineProperty(exports, "__esModule", {value: true}); function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }/* eslint-disable no-unused-vars */
var _User = require('../models/User'); var _User2 = _interopRequireDefault(_User);
var _FotoProfile = require('../models/FotoProfile'); var _FotoProfile2 = _interopRequireDefault(_FotoProfile);
var _FotoCapa = require('../models/FotoCapa'); var _FotoCapa2 = _interopRequireDefault(_FotoCapa);
var _Lead = require('../models/Lead'); var _Lead2 = _interopRequireDefault(_Lead);

class UsersController {
  async index(req, res) {
    const user = await _User2.default.findAll({
      attributes: ['id', 'nome'],
      order: [['id', 'DESC'], [_FotoProfile2.default, 'id', 'DESC']],
      include: {
        model: _FotoProfile2.default,
        attributes: ['url', 'filename'],
      },
    });

    res.status(200).json(user);
  }

  async show(req, res) {
    try {
      const users = await _User2.default.findByPk(req.params.id, {
        attributes: ['id', 'nome'],
        order: [['id', 'DESC'], [_FotoProfile2.default, 'id', 'DESC']],
        include: {
          model: _FotoProfile2.default,
          attributes: ['filename'],
        },
      });
      const fotoCapa = await _User2.default.findByPk(req.params.id, {
        attributes: ['id', 'nome'],
        order: [['id', 'DESC'], [_FotoCapa2.default, 'id', 'DESC']],
        include: {
          model: _FotoCapa2.default,
          attributes: ['filename'],
        },
      });

      const lead = await _User2.default.findByPk(req.params.id, {
        attributes: ['id', 'nome'],
        order: [['id', 'DESC'], [_Lead2.default, 'id', 'DESC']],
        include: {
          model: _Lead2.default,
          attributes: ['id', 'empresa', 'valores', 'cidade', 'captacao', 'nome', 'email', 'user_id'],
        },
      });

      if (!users || !fotoCapa || !lead) {
        return res.status(400).json({
          errors: ['Aluno dont exist'],
        });
      }
      return res.json({ users, fotoCapa, lead });
    } catch (error) {
      return res.status(400).json({ Failed: error.errors.map((err) => (err.message)) });
    }
  }

  async update(req, res) {
    try {
      const user = await _User2.default.findByPk(req.userId);

      if (!user) {
        return res.status(403).json({
          errors: ['Missing user'],
        });
      }

      const newData = await user.update(req.body);

      const {
        id, nome, email, password,
      } = newData;

      return res.json({
        id, nome, email, password,
      });
    } catch (error) {
      return res.status(400).json({ Failed: error.errors.map((err) => (err.message)) });
    }
  }

  async delete(req, res) {
    try {
      const user = await _User2.default.findByPk(req.userId);

      if (!user) {
        return res.status(400).json({
          errors: ['Missing user'],
        });
      }

      await user.destroy();
      return res.json(user);
    } catch (error) {
      return res.status(400).json({ Failed: error.errors.map((err) => (err.message)) });
    }
  }
}

exports. default = new UsersController();
