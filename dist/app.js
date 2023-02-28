"use strict";Object.defineProperty(exports, "__esModule", {value: true}); function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }var _path = require('path');
var _dotenv = require('dotenv'); var _dotenv2 = _interopRequireDefault(_dotenv);

_dotenv2.default.config();

require('./database');

var _express = require('express'); var _express2 = _interopRequireDefault(_express);

var _cors = require('cors'); var _cors2 = _interopRequireDefault(_cors);
var _helmet = require('helmet'); var _helmet2 = _interopRequireDefault(_helmet);

var _users = require('./routes/users'); var _users2 = _interopRequireDefault(_users);

var _home = require('./routes/home'); var _home2 = _interopRequireDefault(_home);
var _login = require('./routes/login'); var _login2 = _interopRequireDefault(_login);
var _register = require('./routes/register'); var _register2 = _interopRequireDefault(_register);
var _logout = require('./routes/logout'); var _logout2 = _interopRequireDefault(_logout);

var _lead = require('./routes/lead'); var _lead2 = _interopRequireDefault(_lead);

var _fotos = require('./routes/fotos'); var _fotos2 = _interopRequireDefault(_fotos);

var _verifyPassChange = require('./routes/verifyPassChange'); var _verifyPassChange2 = _interopRequireDefault(_verifyPassChange);

const app = _express2.default.call(void 0, );

const whitelist = ['https://logan.myvnc.com'];
// eslint-disable-next-line no-unused-vars
const corsOptions = {
  origin(origin, callback) {
    if (whitelist.indexOf(origin) !== -1) {
      callback(null, true);
    } else {
      callback('Domain not allowed, not authorized');
    }
  },
};

app.use(_cors2.default.call(void 0, ));
app.use(_helmet2.default.call(void 0, { crossOriginResourcePolicy: false }));
app.use(_express2.default.urlencoded({ extended: true }));
app.use(_express2.default.json());
app.use('/images/', _express2.default.static(_path.resolve.call(void 0, __dirname, '..', 'uploads', 'images')));

app.use('/lead', _lead2.default);

app.use('/users', _users2.default);
app.use('/', _home2.default);
app.use('/register', _register2.default);
app.use('/login', _login2.default);
app.use('/foto', _fotos2.default);
app.use('/verifyPassChange', _verifyPassChange2.default);
app.use('/logout', _logout2.default);

exports. default = app;
