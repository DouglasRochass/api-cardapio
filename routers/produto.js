const express = require('express');
const router = express.Router();
const product = require('../controllers/produto');
const modelo = require('../models/produtos')
// Rota para criar um novo documento
router.post('/criar', async (req, res) => {
    try {
     const novoProduto = await product.create(req.body);
    res.status(201).json({novoProduto, message: "produto criado com sucesso"});
  } catch (error) {
    res.status(500).json({ error: 'Erro ao criar produto' });
  }
 });

//   try {
//     const novoProduto = await product.create(req.body);
//     res.status(201).json({novoProduto, message: "produto criado com sucesso"});
//   } catch (error) {
//     res.status(500).json({ error: 'Erro ao criar produto' });
//   }
// });
// rota para buscar os produtos
router.get('/buscar', async (req, res) => {
    try {
      const todosProdutos = await modelo.find();
      res.status(200).json(todosProdutos);
    } catch (error) {
      res.status(500).json({ error: 'Erro ao obter todos os produtos' });
    }
  });


// Rota para atualizar um documento existente
router.put('/atualizar/:id', async (req, res) => {
      
    try {
      const idProduto = req.params.id;
      const {categoria, nome, descricao, preco} = req.body;
  
      const produtoAtualizado = await modelo.findByIdAndUpdate(
        idProduto,
        { categoria, nome, descricao, preco},
        { new: true }
      );
  
      res.status(200).json({produtoAtualizado, message: "Produto atualizado com sucesso"});
    } catch (error) {
      res.status(500).json({ error: 'Erro ao atualizar produto' });
    }
  });
  
                // Rota para deletar um documento existente
router.delete('/deletar/:id', async (req, res) => {
    try {
        const idProduto = req.params.id;
    
        const produtoDeletado = await modelo.findByIdAndDelete(idProduto);
    
        res.status(200).json({produtoDeletado, message: "deletado com sucesso" });
    } catch (error) {
        res.status(500).json({ error: 'Erro ao deletar produto' });
    }
    });


// Outras rotas para ler, atualizar e deletar documentos
// ...

module.exports = router;
