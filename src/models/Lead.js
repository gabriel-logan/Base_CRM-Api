import Sequelize, { Model } from 'sequelize';

export default class Lead extends Model {
  static init(sequelize) {
    super.init({
      empresa: {
        type: Sequelize.STRING,
        defaultValue: '',
      },
      valores: {
        type: Sequelize.STRING,
        defaultValue: '',
      },
      cidade: {
        type: Sequelize.STRING,
        defaultValue: '',
      },
      captacao: {
        type: Sequelize.STRING,
        defaultValue: '',
      },
      nome: {
        type: Sequelize.STRING,
        defaultValue: '',
        validate: {
          len: {
            args: [3, 25],
            msg: 'Nome não pode ficar em branco',
          },
        },
      },
      email: {
        type: Sequelize.STRING,
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
}
