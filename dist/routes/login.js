"use strict";Object.defineProperty(exports, "__esModule", {value: true}); function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }var _express = require('express');
var _login = require('../controllers/login'); var _login2 = _interopRequireDefault(_login);

const router = new (0, _express.Router)();

router.get('/', _login2.default.index);
router.post('/', _login2.default.store);

exports. default = router;
