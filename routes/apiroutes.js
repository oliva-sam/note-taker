const app = require ("express").Router();
const fs = require ("fs");

var db = require("../db/db.json");

app.get("/api/notes", function(req, res) {
    db = JSON.parse(fs.readFileSync("./db/db.json"));
    console.log("Get route", db);
    res.json(db);
});

app.post("/api/notes", function(req, res) {
    var userNote = {
        id: Math.floor(Math.random() *100 ),
        title: req.body.title, 
        text: req.body.text
    }
    db.push(userNote);
    fs.writeFileSync("./db/db.json", JSON.stringify(db));
    console.log("Post route", db);
    res.json(db);
});

app.delete("/api/notes/:id", function(req, res) {
    var updatedNote = [];
    updatedNote = db.filter(note => {
        return note.id !== req.params.id
    })
    db = updatedNote;
    fs.writeFileSync("./db/db.json", JSON.stringify(db));
    console.log("Delete route", db);
    res.json(db);
});

module.exports = app;