 const Produto = require("../models/produtos"); // Use um nome diferente para a variável

 exports.create = async (req, res) => {
   try {
     const categoria = req.body.categoria; // Corrija aqui para acessar os campos corretamente
     const nome = req.body.nome;
     const descricao = req.body.descricao;
     const preco = req.body.preco;
     const imagem = req.file.path;

    const novoProduto = new Produto({
       categoria,
       nome,
       descricao,
       preco,
       imagem
     });
     await novoProduto.save(); // Corrija aqui para chamar o método save() no novoProduto
     res.status(201).json({ novoProduto, message: "Produto salvo com sucesso" });
   } catch (error) {
     res.status(500).json({ message: "Erro ao cadastrar produto" });
   }
 };

// exports.find = async (req, res) => {
//   try {
//     const produtos = await Produto.find(); // Corrija aqui para chamar o método find() no Produto

//     res.status(200).json(produtos);
//   } catch (error) {
//     res.status(500).json({ message: "Erro ao buscar produtos" });
//   }
// };
