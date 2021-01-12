// Dependencies
const express = require ("express");
const htmlRoutes = require ("./routes/htmlroutes.js");
const apiRoutes = require ("./routes/apiroutes.js");

// Set Up Express App
const app = express();
const PORT = 8000;

// Sets up Express App to handle data parsing for post requests
app.use(express.urlencoded({extended: true,}));
app.use(express.json());


// Sets up Express App to serve different types of files in a directory
app.use(express.static("public"));

// Sets up Express App to read route js files
app.use(apiRoutes);
app.use(htmlRoutes);

// Starts the Server to listen on port 8000
app.listen(PORT, function() {
    console.log(`App listening on PORT : ${PORT}`)
});
