"use strict";Object.defineProperty(exports, "__esModule", {value: true}); function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }var _sequelize = require('sequelize'); var _sequelize2 = _interopRequireDefault(_sequelize);

 class Lead extends _sequelize.Model {
  static init(sequelize) {
    super.init({
      empresa: {
        type: _sequelize2.default.STRING,
        defaultValue: '',
      },
      valores: {
        type: _sequelize2.default.STRING,
        defaultValue: '',
      },
      cidade: {
        type: _sequelize2.default.STRING,
        defaultValue: '',
      },
      captacao: {
        type: _sequelize2.default.STRING,
        defaultValue: '',
      },
      nome: {
        type: _sequelize2.default.STRING,
        defaultValue: '',
        validate: {
          len: {
            args: [3, 25],
            msg: 'Nome não pode ficar em branco',
          },
        },
      },
      email: {
        type: _sequelize2.default.STRING,
        defaultValue: '',
        unique: {
          msg: 'Usuario já existe',
        },
      },
    }, {
      sequelize,
    });

    return this;
  }

  static associate(models) {
    this.belongsTo(models.User, { foreignKey: 'user_id' });
  }
} exports.default = Lead;
