/* eslint-disable no-unused-vars */
import jwt from 'jsonwebtoken';
import User from '../models/User';

export default async (req, res, next) => {
  const { authorization } = req.headers;

  if (!authorization) {
    return res.status(401).json({
      errors: ['Login é requirido'],
    });
  }

  const token = authorization.split(' ')[1];
  try {
    const dados = jwt.verify(token, process.env.TOKEN_SECRET);

    const { id, name } = dados;

    const user = await User.findOne({
      where: {
        id,
        nome: name,
      },
    });

    if (!user) {
      return res.status(401).json({
        errors: ['User invalid'],
      });
    }

    req.userId = id;
    req.userName = name;

    return next();
  } catch (error) {
    return res.status(401).json({
      errors: ['Token expirado ou invalido'],
    });
  }
};
