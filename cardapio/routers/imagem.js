const express = require("express")
const router = express.Router()

const upload = require('../config/multer')

const Imagem = require("../controllers/imagem")

router.post('/', upload.single("file"), Imagem.create)
// router.get("/", upload.findAll)
module.exports = router