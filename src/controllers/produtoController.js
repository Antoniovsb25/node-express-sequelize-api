const { Fabricantes, Produto } = require("../models");

const produtoController = {
  listarProdutos: async (req, res) => {
    const listaDeProdutos = await Produto.findAll({
      include: Fabricantes,
    });
    res.json(listaDeProdutos);
  },

  async cadastrarProduto(req, res) {
    const { nome, preco, quantidade, fabricante_id } = req.body;

    const novoProduto = await Produto.create({
      nome,
      preco,
      quantidade,
      fabricante_id,
    });
    res.status(201).json(novoProduto);
  },

  async deletarProduto(req, res) {
    try {
      const { id } = req.params;

      await Produto.destroy({
        where: { id },
      });
      res.status(204);
    } catch (err) {
        return res.status(500).json("ocorreu algum problema")
    }
  },

  async atualizarProduto(req, res) {
    const { id } = req.params;
    const { nome, preco, quantidade, fabricante_id } = req.body;

    if (!id) return res.status(400).json("id não enviado");

    await Produto.update(
      {
        nome,
        preco,
        quantidade,
        fabricante_id,
      },
      {
        where: { id },
      }
    );
    res.json("produto atualizado!");
  },
};

module.exports = produtoController;
