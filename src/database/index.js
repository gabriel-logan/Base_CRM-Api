import { Sequelize } from 'sequelize';
import databaseConfig from '../config/database';
import User from '../models/User';
import FotoProfile from '../models/FotoProfile';
import FotoCapa from '../models/FotoCapa';
import Lead from '../models/Lead';

const models = [User, FotoProfile, FotoCapa, Lead];

const connection = new Sequelize(databaseConfig);

models.forEach((model) => { model.init(connection); });
models.forEach((model) => model.associate && model.associate(connection.models));
