import { resolve } from 'path';
import dotenv from 'dotenv';

dotenv.config();

import './database';

import express from 'express';

import cors from 'cors';
import helmet from 'helmet';

import userRoutes from './routes/users';

import homeRouter from './routes/home';
import loginRouter from './routes/login';
import registerRouter from './routes/register';
import logoutRouter from './routes/logout';

import leadRouter from './routes/lead';

import fotosRouter from './routes/fotos';

import verifyPassChangeRouter from './routes/verifyPassChange';

const app = express();

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

app.use(cors());
app.use(helmet({ crossOriginResourcePolicy: false }));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use('/images/', express.static(resolve(__dirname, '..', 'uploads', 'images')));

app.use('/lead', leadRouter);

app.use('/users', userRoutes);
app.use('/', homeRouter);
app.use('/register', registerRouter);
app.use('/login', loginRouter);
app.use('/foto', fotosRouter);
app.use('/verifyPassChange', verifyPassChangeRouter);
app.use('/logout', logoutRouter);

export default app;
