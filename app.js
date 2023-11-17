const express = require('express')
const cors = require('cors')

const login = require('./routers/auth')
const uploadImage = require("./routers/imagem")



const app = express();
app.use(express.json())
app.use(cors());

app.use('/login', login)
app.use("/upload", uploadImage)

// app.use(router)

app.listen(4000, () => console.log('Servidor rodando na porta 4000'))
