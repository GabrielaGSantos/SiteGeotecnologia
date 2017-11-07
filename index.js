const app = require("./app")
const port = process.env.PORT || 8888

app.listen(port,(err)=>{
    if(err) throw err
        console.log("Servidor ouvindo na porta: "+port)
})