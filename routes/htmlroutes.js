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

// Exports to the server.js file
module.exports = app