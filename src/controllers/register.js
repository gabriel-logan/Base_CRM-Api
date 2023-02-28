import User from '../models/User';

class RegisterController {
  index(req, res) {
    return res.status(204).end('Register page');
  }

  async store(req, res) {
    console.log(req.body);
    const { name } = req.body;
    const { password } = req.body;
    try {
      await User.create({ nome: name, password });
      return res.status(200).json({ success: ['Conta criada com sucesso'] });
    } catch (error) {
      return res.status(400).json({ errors: [error.errors[0].message] });
    }
  }
}

export default new RegisterController();
