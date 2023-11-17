const express = require('express')
const cors = require('cors')
// const rotas = require('./routers')

const app = express();
app.use(express.json())
app.use(cors());

 app.use(rotas)

app.listen(4000, () => console.log('Servidor rodando na porta 4000'))
