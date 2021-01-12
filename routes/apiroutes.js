// Dependencies
const app = require("express").Router();
const fs = require("fs");
var db = require("../db/db.json");

// GET request to see the notes as a JSON
app.get("/api/notes", function (req, res) {
    db = JSON.parse(fs.readFileSync("./db/db.json"))
    console.log("Get route", db);
    return res.json(db);
});

// POST request to make a new note
app.post("/api/notes", function (req, res) {
    var userNote = {
        id: Math.floor(Math.random() * 100),
        title: req.body.title,
        text: req.body.text
    }
    db.push(userNote);
    console.log("Updated POST route array", db)
    fs.writeFileSync("./db/db.json", JSON.stringify(db), function () {
        console.log("Post route", db);
        return res.json(db);
    });
});

// DELETE request to delete a note
app.delete("/api/notes/:id", function (req, res) {
    var noNote = [];
    noNote = db.filter(note => {
        return note.id != req.params.id
    })
    db = noNote;
    console.log("Delete Route: ", db);
    fs.writeFileSync("./db/db.json", JSON.stringify(db), function () {
        console.log("Delete route", db);
        return res.json(db);
    });
});

// Exports to the server.js file
module.exports = app;