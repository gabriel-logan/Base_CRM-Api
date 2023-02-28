"use strict";Object.defineProperty(exports, "__esModule", {value: true}); function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }var _express = require('express');

var _fotoProfile = require('../controllers/fotoProfile'); var _fotoProfile2 = _interopRequireDefault(_fotoProfile);
var _fotoCapa = require('../controllers/fotoCapa'); var _fotoCapa2 = _interopRequireDefault(_fotoCapa);

var _verifyLogin = require('../middlewares/verifyLogin'); var _verifyLogin2 = _interopRequireDefault(_verifyLogin);

const router = new (0, _express.Router)();

router.post('/profile', _verifyLogin2.default, _fotoProfile2.default.store);
router.post('/capa', _verifyLogin2.default, _fotoCapa2.default.store);

exports. default = router;
