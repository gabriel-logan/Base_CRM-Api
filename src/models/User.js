import Sequelize, { Model } from 'sequelize';
import bcrypt from 'bcryptjs';

export default class User extends Model {
  static init(sequelize) {
    super.init({
      nome: {
        type: Sequelize.STRING,
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
        type: Sequelize.STRING,
        defaultValue: '',
      },
      password: {
        type: Sequelize.VIRTUAL,
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
        user.password_hash = await bcrypt.hash(user.password, 8);
      }
    });

    return this;
  }

  passwordIsValid(password) {
    return bcrypt.compare(password, this.password_hash);
  }

  static associate(models) {
    this.hasMany(models.FotoProfile, { foreignKey: 'user_id' });
    this.hasMany(models.FotoCapa, { foreignKey: 'user_id' });
    this.hasMany(models.Lead, { foreignKey: 'user_id' });
  }
}
