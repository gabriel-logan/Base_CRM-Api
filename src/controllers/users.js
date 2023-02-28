/* eslint-disable no-unused-vars */
import User from '../models/User';
import FotoProfile from '../models/FotoProfile';
import FotoCapa from '../models/FotoCapa';
import Lead from '../models/Lead';

class UsersController {
  async index(req, res) {
    const user = await User.findAll({
      attributes: ['id', 'nome'],
      order: [['id', 'DESC'], [FotoProfile, 'id', 'DESC']],
      include: {
        model: FotoProfile,
        attributes: ['url', 'filename'],
      },
    });

    res.status(200).json(user);
  }

  async show(req, res) {
    try {
      const users = await User.findByPk(req.params.id, {
        attributes: ['id', 'nome'],
        order: [['id', 'DESC'], [FotoProfile, 'id', 'DESC']],
        include: {
          model: FotoProfile,
          attributes: ['filename'],
        },
      });
      const fotoCapa = await User.findByPk(req.params.id, {
        attributes: ['id', 'nome'],
        order: [['id', 'DESC'], [FotoCapa, 'id', 'DESC']],
        include: {
          model: FotoCapa,
          attributes: ['filename'],
        },
      });

      const lead = await User.findByPk(req.params.id, {
        attributes: ['id', 'nome'],
        order: [['id', 'DESC'], [Lead, 'id', 'DESC']],
        include: {
          model: Lead,
          attributes: ['id', 'empresa', 'valores', 'cidade', 'captacao', 'nome', 'email', 'user_id'],
        },
      });

      if (!users || !fotoCapa || !lead) {
        return res.status(400).json({
          errors: ['Aluno dont exist'],
        });
      }
      return res.json({ users, fotoCapa, lead });
    } catch (error) {
      return res.status(400).json({ Failed: error.errors.map((err) => (err.message)) });
    }
  }

  async update(req, res) {
    try {
      const user = await User.findByPk(req.userId);

      if (!user) {
        return res.status(403).json({
          errors: ['Missing user'],
        });
      }

      const newData = await user.update(req.body);

      const {
        id, nome, email, password,
      } = newData;

      return res.json({
        id, nome, email, password,
      });
    } catch (error) {
      return res.status(400).json({ Failed: error.errors.map((err) => (err.message)) });
    }
  }

  async delete(req, res) {
    try {
      const user = await User.findByPk(req.userId);

      if (!user) {
        return res.status(400).json({
          errors: ['Missing user'],
        });
      }

      await user.destroy();
      return res.json(user);
    } catch (error) {
      return res.status(400).json({ Failed: error.errors.map((err) => (err.message)) });
    }
  }
}

export default new UsersController();
