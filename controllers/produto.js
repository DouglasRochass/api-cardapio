const produto = require("../models/produtos")

exports.create = async (req, res) =>{

  try {
    const categoria = req.body
    const nome = req.body
    const descricao = req.body
    const preco = req.body
    const imagem = req.file

    const produto = new produto({
      categoria,
      nome,
      descricao,
      preco,
      imagem: imagem.path
    })
    
    await saveProduct.save()

    res.json({saveProduct, message: "Produto salvo com sucesso"})

  } catch (error) {
    res.status(500).json({message: "Erro ao cadastrar produto"})
  }
}

exports.findAll = async(req, res) =>{
  try {
    const product = await saveProduct.find()

    res.json(saveProduct)
    
  } catch (error) {
    res.status(500).json({message: "Erro ao buscar PRODUTO"})
    
  }
}