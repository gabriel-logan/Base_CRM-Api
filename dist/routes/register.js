"use strict";Object.defineProperty(exports, "__esModule", {value: true}); function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }var _express = require('express');
var _register = require('../controllers/register'); var _register2 = _interopRequireDefault(_register);

const router = new (0, _express.Router)();

router.get('/', _register2.default.index);
router.post('/', _register2.default.store);

exports. default = router;
