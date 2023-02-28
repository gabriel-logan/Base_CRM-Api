"use strict";Object.defineProperty(exports, "__esModule", {value: true}); function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }/* eslint-disable no-unused-vars */
var _jsonwebtoken = require('jsonwebtoken'); var _jsonwebtoken2 = _interopRequireDefault(_jsonwebtoken);
var _User = require('../models/User'); var _User2 = _interopRequireDefault(_User);

exports. default = async (req, res, next) => {
  const { authorization } = req.headers;

  if (!authorization) {
    return res.status(401).json({
      errors: ['Login é requirido'],
    });
  }

  const token = authorization.split(' ')[1];
  try {
    const dados = _jsonwebtoken2.default.verify(token, process.env.TOKEN_SECRET);

    const { id, name } = dados;

    const user = await _User2.default.findOne({
      where: {
        id,
        nome: name,
      },
    });

    if (!user) {
      return res.status(401).json({
        errors: ['User invalid'],
      });
    }

    req.userId = id;
    req.userName = name;

    return next();
  } catch (error) {
    return res.status(401).json({
      errors: ['Token expirado ou invalido'],
    });
  }
};
