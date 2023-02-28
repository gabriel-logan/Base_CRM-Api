/* eslint-disable camelcase */
import Lead from '../models/Lead';

class LeadController {
  async index(req, res) {
    const leads = await Lead.findAll({
      attributes: ['id', 'empresa', 'valores', 'cidade', 'captacao', 'nome', 'email', 'user_id'],
    });

    return res.status(200).json(leads);
  }

  async store(req, res) {
    try {
      const { empresa } = req.body;
      const { valores } = req.body;
      const { cidade } = req.body;
      const { captacao } = req.body;
      const { nome } = req.body;
      const email = req.body.contato;
      const user_id = req.body.userId;
      await Lead.create({
        empresa, valores, cidade, captacao, nome, email, user_id,
      });
      return res.status(200).json({ success: ['Lead criada com sucesso'] });
    } catch (error) {
      return res.status(400).json({ errors: [error.errors[0].message] });
    }
  }
}

export default new LeadController();
