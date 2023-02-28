"use strict";Object.defineProperty(exports, "__esModule", {value: true}); function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }var _express = require('express');
var _users = require('../controllers/users'); var _users2 = _interopRequireDefault(_users);
var _verifyLogin = require('../middlewares/verifyLogin'); var _verifyLogin2 = _interopRequireDefault(_verifyLogin);

const router = new (0, _express.Router)();

router.get('/', _users2.default.index);
router.get('/:id', _users2.default.show);
router.put('/', _verifyLogin2.default, _users2.default.update);
router.delete('/', _verifyLogin2.default, _users2.default.delete);

exports. default = router;
