const express = require("express")
const app = express()
const path = require("path")

app.set("view engine","pug")
app.set("views", path.join(__dirname, "views"))

app.get("/", (req,res)=>{
    res.render("index")
})

app.get("/institucional", (req,res)=>{
    res.render("institucional")
})

app.get("/cursos", (req,res)=>{
    res.render("./cursos/cursos")
})

app.get("/professores", (req,res)=>{
    res.render("professores")
})

app.get("*", (req,res)=>{
    res.sendFile(path.join(__dirname, "../public/"+req.params[0]))
})

module.exports = app