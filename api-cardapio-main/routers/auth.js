const express = require('express')
const autenticador = require('../controllers/autenticar')
const router = express.Router()

router.post('/', autenticador.Login)

module.exports = router

