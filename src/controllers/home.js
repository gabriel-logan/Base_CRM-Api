class HomeController {
  index(req, res) {
    res.status(200).json('Aqui é a home');
  }
}

export default new HomeController();
