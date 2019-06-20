// *****************************************************************************
// Server.js - This file is the initial starting point for the Node/Express server.
//
// ******************************************************************************
// *** Dependencies
// =============================================================
var express = require("express");

// Sets up the Express App
// =============================================================
var app = express();
var PORT = process.env.PORT || 8080;

// Requiring our models for syncing


// Sets up the Express app to handle data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

//sets handlebars
var exphbs = require("express-handlebars");

app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

// Static directory
app.use(express.static("public"));

// Routes
// =============================================================
require("./controllers/burgers_controller.js")(app);


// Syncing our sequelize models and then starting our Express app
// =============================================================

app.listen(PORT, function () {
    console.log("App listening on PORT " + PORT);
});