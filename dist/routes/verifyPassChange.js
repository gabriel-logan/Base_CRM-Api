"use strict";Object.defineProperty(exports, "__esModule", {value: true}); function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }var _express = require('express');
var _verifyPassChange = require('../controllers/verifyPassChange'); var _verifyPassChange2 = _interopRequireDefault(_verifyPassChange);

const router = new (0, _express.Router)();

router.post('/', _verifyPassChange2.default.store);

exports. default = router;
