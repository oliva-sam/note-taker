const express = require ("express");

var app = express();
var PORT = 8000;

var htmlRoutes = require ("./routes/htmlroutes.js");

// default code 
app.use(express.urlencoded({
    extended: true,
}));

app.use(express.json());

app.use(express.static("public"));

app.use(htmlRoutes);

app.listen(PORT, function() {
    console.log(`App listening on PORT : ${PORT}`)
});
