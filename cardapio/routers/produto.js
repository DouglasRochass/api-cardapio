const express = require('express');
const router = express.Router();
const produtoController = require('../controllers/produto');

// Rota para criar um novo produto
router.post('/criar', async (req, res) => {
  try {
    const novoProduto = await produtoController.create(req, res);

  } catch (error) {
    res.status(500).json({ error: 'Erro ao criar produto' });
  }
});

// Rota para buscar produtos por categoria
router.get('/buscar/:categoria', async (req, res) => {
  try {
    const { categoria } = req.params;
    const produtosPorCategoria = await produtoController.findByCategory(req, res);
    res.status(200).json(produtosPorCategoria);
  } catch (error) {
    res.status(500).json({ error: 'Erro ao obter produtos por categoria' });
  }
});

// Rota para atualizar um produto existente
router.put('/atualizar/:id', async (req, res) => {
  try {
    const produtoAtualizado = await produtoController.update(req, res);

  } catch (error) {
    res.status(500).json({ error: 'Erro ao atualizar produto' });
  }
});

// Rota para deletar um produto existente
router.delete('/deletar/:id', async (req, res) => {
  try {
    const produtoDeletado = await produtoController.delete(req, res);
    res.status(200).json({ produtoDeletado, message: "Produto deletado com sucesso" });
  } catch (error) {
    res.status(500).json({ error: 'Erro ao deletar produto' });
  }
});

// Outras rotas para ler, atualizar e deletar documentos
// ...

module.exports = router;
