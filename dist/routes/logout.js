"use strict";Object.defineProperty(exports, "__esModule", {value: true}); function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }var _express = require('express');
var _logout = require('../controllers/logout'); var _logout2 = _interopRequireDefault(_logout);
var _verifyLogin = require('../middlewares/verifyLogin'); var _verifyLogin2 = _interopRequireDefault(_verifyLogin);

const router = new (0, _express.Router)();

router.post('/', _verifyLogin2.default, _logout2.default.store);

exports. default = router;
