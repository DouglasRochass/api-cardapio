const { Schema, model } = require('mongoose');

const usuarioSchema = new Schema({
  email: { type: String, required: true, unique: true },
  senha: { type: String, required: true },
});



module.exports = model('Usuario', usuarioSchema);

