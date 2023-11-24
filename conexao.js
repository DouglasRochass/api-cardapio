const mongoose = require('mongoose')

const conectar_bd = () => {mongoose.connect("mongodb+srv://Douglasr:douglas@cluster0.sy089kk.mongodb.net/?retryWrites=true&w=majority")

.then(
  ()=>{
    console.log("Connected to MongoDB")
  }
)
.catch((err) =>{

  console.log(err)
})
}

conectar_bd()