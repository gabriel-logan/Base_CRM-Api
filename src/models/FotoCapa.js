import Sequelize, { Model } from 'sequelize';

export default class FotoCapa extends Model {
  static init(sequelize) {
    super.init({
      originalname: {
        type: Sequelize.STRING,
        defaultValue: '',
        validate: {
          notEmpty: {
            msg: 'Não pode ser vasio',
          },
        },
      },
      filename: {
        type: Sequelize.STRING,
        defaultValue: '',
        validate: {
          notEmpty: {
            msg: 'Não pode ser vasio',
          },
        },
      },
      url: {
        type: Sequelize.VIRTUAL,
        get() {
          return `https://apireact.3utilities.com/images/${this.getDataValue('filename')}`;
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
