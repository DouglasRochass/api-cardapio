const express = require("express")
const router = express.Router()

const upload = require('../config/multer')

const product = require("../controllers/produto")

router.post('/', upload.single("imagem"), product.create)
router.post('/', product.create)
// router.get("/", upload.findAll)
module.exports = router