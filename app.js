const express = require('express')
const cors = require('cors')
require('./conexao')
const login = require('./routers/auth')
const produto = require('./routers/produto')
const bodyParser = require('body-parser')

const app = express();
app.use(cors());
app.use(bodyParser.json())

app.use('/login', login)
app.use('/', produto)

// app.use(router)

app.listen(4000, () => console.log('Servidor rodando na porta 4000'))
