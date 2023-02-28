"use strict"; function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }var _sequelize = require('sequelize');
var _database = require('../config/database'); var _database2 = _interopRequireDefault(_database);
var _User = require('../models/User'); var _User2 = _interopRequireDefault(_User);
var _FotoProfile = require('../models/FotoProfile'); var _FotoProfile2 = _interopRequireDefault(_FotoProfile);
var _FotoCapa = require('../models/FotoCapa'); var _FotoCapa2 = _interopRequireDefault(_FotoCapa);
var _Lead = require('../models/Lead'); var _Lead2 = _interopRequireDefault(_Lead);

const models = [_User2.default, _FotoProfile2.default, _FotoCapa2.default, _Lead2.default];

const connection = new (0, _sequelize.Sequelize)(_database2.default);

models.forEach((model) => { model.init(connection); });
models.forEach((model) => model.associate && model.associate(connection.models));
