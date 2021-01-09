const app = require ("express").Router();
const fs = require ("fs");

var db = require("../db/db.json");

app.get("/api/notes", function(req, res) {
    db = JSON.parse(fs.readFileSync("./db/db.json"))
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
    console.log("Updated POST route array",db)
    fs.writeFileSync("./db/db.json", JSON.stringify(db), function() {
        console.log("Post route", db);
        res.json(db);
    });
});

app.delete("/api/notes/:id", function(req, res) {
    var updatedNote = [];
    updatedNote = db.filter(note => {
        return note.id != req.params.id
    })
    db = updatedNote;
    console.log("Delete Route: ",db);
    fs.writeFileSync("./db/db.json", JSON.stringify(db), function() {
        console.log("Delete route", db);
        res.json(db);
    });
});

module.exports = app;