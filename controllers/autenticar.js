
const Usuario = require('../models/usuario')

const login = async(req, res) =>{
    const {email, senha} = req.body;
    
    try {
        const usuario = await Usuario.findOne({email})
        if(!usuario){
            return res.status(401).send({error: 'Usuário não encontrado'});
        }
    } catch (error) {
        console.log(error);
        res.status(500).json({mensagem: 'não foi possível fazer a solicitação'})
    }
}


module.exports = login;
