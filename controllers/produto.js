const Produto = require("../models/produtos");

exports.create = async (req, res) => {
  try {
    const { categoria, nome, descricao, preco } = req.body; // Acesso aos campos do corpo da requisição

    const newProduct = new Produto({
      categoria,
      nome,
      descricao,
      preco
    });

    await newProduct.save(); // Chamar o método save() no newProduct
    res.status(201).json({ newProduct, message: "Produto salvo com sucesso" });
  } catch (error) {
    res.status(500).json({ message: "Erro ao cadastrar produto" });
  }
};

exports.find = async (req, res) => {
  try {
    const produtos = await Produto.find(); 

    res.status(200).json(produtos);
  } catch (error) {
    res.status(500).json({ message: "Erro ao buscar produtos" });
  }
};
