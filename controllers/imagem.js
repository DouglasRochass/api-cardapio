const salvarImagem = require("../models/imagens")

exports.create = async (req, res) =>{

  try {
    const {name} = req.body

    const file = req.file

    const salvarImagem = new SalvarImagem({
      name,
      src: file.path
    })
    
    await SalvarImagem.save()

    res.json({salvarImagem, message: "Imagem salva com sucesso"})

  } catch (error) {
    res.status(500).json({message: "Erro ao salvar imagem"})
  }
}

exports.findAll = async(req, res) =>{
  try {
    const pictures = await  SalvarImagem.find()

    res.json(salvarImagem)
    
  } catch (error) {
    res.status(500).json({message: "erro ao buscar imagem"})
    
  }
}