const express = require("express")
const app = express()
const path = require("path")

app.set("view engine","pug")
app.set("views", path.join(__dirname))

app.get("*", (req,res)=>{
    res.sendFile(path.join(__dirname, "../public/"+req.params[0]))
})

module.exports = app