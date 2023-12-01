const {Schema, model}  = require('mongoose')



const produtoSchema = new Schema({
     categoria: {type: String, required: true},

     nome: {type: String, required: true},

     descricao: { type: String, required: true },

     preco:    {type: Number, required:true},
     
     imagem:   {type: String, required:true}
})

module.exports = model('Produto', produtoSchema)