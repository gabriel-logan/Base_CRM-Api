import User from '../models/User';

class VerifyPassChangeController {
  async store(req, res) {
    const { name } = req.body;
    const { password } = req.body;
    try {
      const userExist = await User.findOne({ where: { nome: name } });
      if (!userExist) {
        return res.status(400).json({ errors: ['Usuario não existe'] });
      }

      if (!(await userExist.passwordIsValid(password))) {
        return res.status(401).json({ errors: ['Senha atual invalida'] });
      }

      return res.status(200).json('Verificado');
    } catch (error) {
      console.log(error);
      return res.status(400).json({ errors: ['Error desconhecido'] });
    }
  }
}

export default new VerifyPassChangeController();
