const Produto = require("../models/produtos");


exports.create = async (req, res) => {
  try {
    const { categoria, nome, descricao, preco } = req.body;

    const novoProduto = await Produto.create({ categoria, nome, descricao, preco });

    res.status(201).json({ newProductId: novoProduto.id, message: "Produto cadastrado com sucesso" });
  } catch (error) {
    console.error('Erro no bloco try-catch:', error);
    if (!res.headersSent) {
      res.status(500).json({ message: "Erro ao cadastrar produto" });
    }
  }
};

exports.findByCategory = async (req, res) => {
  try {
    const { categoria } = req.params;

    const produtos = await Produto.findAll({
      where: { categoria }
    });

    res.status(200).json(produtos);
  } catch (error) {
    console.error('Erro ao buscar produtos por categoria:', error);
    res.status(500).json({ message: "Erro ao buscar produtos por categoria" });
  }
};

exports.update = async (req, res) => {
  try {
    const idProduto = req.params.id;
    const { categoria, nome, descricao, preco } = req.body;

    const updatedProduct = await Produto.update({
      categoria,
      nome,
      descricao,
      preco
    }, {
      where: { id: idProduto }
    });

    res.status(200).json({ message: "Produto atualizado com sucesso" });
  } catch (error) {
    console.error('Erro ao atualizar produto:', error);
    res.status(500).json({ message: "Erro ao atualizar produto" });
  }
};

exports.delete = async (req, res) => {
  try {
    const idProduto = req.params.id;

    await Produto.destroy({
      where: { id: idProduto }
    });

    res.status(200).json({ message: "Produto deletado com sucesso" });
  } catch (error) {
    console.error('Erro ao deletar produto:', error);
    res.status(500).json({ message: "Erro ao deletar produto" });
  }
};
