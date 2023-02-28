"use strict";Object.defineProperty(exports, "__esModule", {value: true}); function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }var _express = require('express');

var _lead = require('../controllers/lead'); var _lead2 = _interopRequireDefault(_lead);

var _verifyLogin = require('../middlewares/verifyLogin'); var _verifyLogin2 = _interopRequireDefault(_verifyLogin);

const router = new (0, _express.Router)();

router.get('/', _lead2.default.index);
router.post('/', _verifyLogin2.default, _lead2.default.store);

exports. default = router;
