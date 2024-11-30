const Usuario = require('../models/usuario'); // Importe o modelo de usuário

exports.login = async (req, res) => {
  try {
    const { usuario, senha } = req.body;

    // Verifique se o usuário existe no banco de dados
    const usuarioEncontrado = await Usuario.findOne({
      where: {
        usuario: usuario,
      },
    });

    // Se o usuário não foi encontrado, retorne uma mensagem de erro
    if (!usuarioEncontrado) {
      return res.status(401).json({ message: 'Usuário não encontrado' });
    }

    // Verifique se a senha está correta
    if (usuarioEncontrado.senha !== senha) {
      return res.status(401).json({ message: 'Senha incorreta' });
    }

    // Se chegou até aqui, o login foi bem-sucedido
    return res.status(200).json({ message: 'Login bem-sucedido' });
  } catch (error) {
    console.error('Erro ao realizar login:', error);
    return res.status(500).json({ message: 'Erro ao realizar login' });
  }
};
