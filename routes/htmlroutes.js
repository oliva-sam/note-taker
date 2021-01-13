// Dependencies
const app = require ("express").Router();
var path = require("path");

// Basic Route that sends user to the home page
app.get("/", function(req,res) {
    res.sendFile(path.join(__dirname, "../public/index.html"))
})

// Basic Route that sends user their notes page
app.get("/notes", function(req,res) {
    res.sendFile(path.join(__dirname, "../public/notes.html"))
})

// Route that send user to the home page whenever the url they lookup doesn't exist
app.get("*", function(req,res) {
    res.sendFile(path.join(__dirname, "../public/index.html"))
})

// Exports to the server.js file
module.exports = app