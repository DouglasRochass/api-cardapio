const Usuario = require('../models/usuario')
exports.Login = async(req, res) =>{
    const {email, senha} = req.body;
    
    try {
        const usuario = await Usuario.findOne({email, senha})
        if(!usuario){
            return res.status(401).send({error: 'Usuário não encontrado'});
        }
    } catch (error) {
        console.log(error);
        res.status(500).json({mensagem: 'não foi possível fazer a solicitação'})
    }
}
