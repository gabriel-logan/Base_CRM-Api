"use strict";Object.defineProperty(exports, "__esModule", {value: true}); function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }var _sequelize = require('sequelize'); var _sequelize2 = _interopRequireDefault(_sequelize);
var _bcryptjs = require('bcryptjs'); var _bcryptjs2 = _interopRequireDefault(_bcryptjs);

 class User extends _sequelize.Model {
  static init(sequelize) {
    super.init({
      nome: {
        type: _sequelize2.default.STRING,
        defaultValue: '',
        unique: {
          msg: 'Usuario já existe',
        },
        validate: {
          len: {
            args: [3, 25],
            msg: 'Nome não pode ficar em branco',
          },
        },
      },
      password_hash: {
        type: _sequelize2.default.STRING,
        defaultValue: '',
      },
      password: {
        type: _sequelize2.default.VIRTUAL,
        defaultValue: '',
        validate: {
          len: {
            args: [5, 50],
            msg: 'Senha não pode ficar em branco',
          },
        },
      },
    }, {
      sequelize,
    });

    this.addHook('beforeSave', async (user) => {
      if (user.password) {
        user.password_hash = await _bcryptjs2.default.hash(user.password, 8);
      }
    });

    return this;
  }

  passwordIsValid(password) {
    return _bcryptjs2.default.compare(password, this.password_hash);
  }

  static associate(models) {
    this.hasMany(models.FotoProfile, { foreignKey: 'user_id' });
    this.hasMany(models.FotoCapa, { foreignKey: 'user_id' });
    this.hasMany(models.Lead, { foreignKey: 'user_id' });
  }
} exports.default = User;
