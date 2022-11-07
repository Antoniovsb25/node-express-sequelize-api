const { Usuarios } = require("../models");
const bcrypt = require("bcryptjs");
const secret = require("../configs/secret");
const jwt = require("jsonwebtoken");

const authController = {
  async login(req, res) {
    const { email, senha } = req.body;
    const usuario = await Usuarios.findOne({
      where: {
        email,
      },
    });
    if (!usuario) return res.status(400).json("email não cadastrado!");
    if (!bcrypt.compareSync(senha, usuario.senha))
      return res.status(401).json("senha inválida");

    const token = jwt.sign({
      id: usuario.id,
      email: usuario.email,
      nome: usuario.nome,
    },
    secret.key
    );

    return res.json(token);
  },
};

module.exports = authController;
