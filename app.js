const express = require('express');
const app = express()
app.get("/",(req, res) => {
res.sendFile(__dirname + '/views/home.html')
})

app.get("/about",(req, res) => {
    res.sendFile(__dirname + '/views/about.html')
    })

app.get("/works",(req, res) => {
    res.sendFile(__dirname + '/views/works.html')
    })
app.get("/gallery",(req, res) => {
    res.sendFile(__dirname + '/views/gallery.html')
    })
    

app.listen(3000, () => {
    console.log("listening on port 3000")
})