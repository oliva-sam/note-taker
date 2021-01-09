const app = require ("express").Router();

var path = require("path");

app.get("/", function(req,res) {
    res.sendFile(path.join(__dirname, "../public/index.html"))
})

app.get("/notes", function(req,res) {
    res.sendFile(path.join(__dirname, "../public/notes.html"))
})

// redirect to homepage instead of 404 error
app.get("*", function(req,res) {
    res.sendFile(path.join(__dirname, "../public/index.html"))
})

module.exports = app