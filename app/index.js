const express = require("express")
const app = express()
const path = require("path")

app.set("view engine","pug")
app.set("views", path.join(__dirname, "views"))

app.get("/", (req,res)=>{
    res.render("index")
})

app.get("/index.html", (req,res)=>{
    res.render("index")
})

app.get("/elements.html", (req,res)=>{
    res.render("elements")
})

app.get("/generic.html", (req,res)=>{
    res.render("generic")
})

app.get("/contact.html", (req,res)=>{
    res.render("contact")
})

app.get("*", (req,res)=>{
    res.sendFile(path.join(__dirname, "../public/"+req.params[0]))
})

module.exports = app