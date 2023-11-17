const express = require('express')
const autenticador = require('../controllers/autenticar')

const router = express.Router()

router.post('/login', autenticador.login)

modulçe.exports = router