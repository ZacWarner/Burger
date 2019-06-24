var express = require("express");

var router = express.Router();

var burger = require("../models/burger.js");

router.get("/", function (req, res) {
    burger.all(function (data) {
        var hbsobject = {
            burgers: data
        };
        res.render("index", hbsobject);
    });
});

router.post("/api/burgers/name/:name", function (req, res) {
    var name = req.params.name
    console.log(name);
    burger.create(name, function (result) {
        res.json(result);
    })
});

router.put("/api/burgers/:id", function (req, res) {
    var id = req.params.id;
    burger.update(id, true, function (result) {
        if (result.changedRows == 0) {
            // If no rows were changed, then the ID must not exist, so 404
            return res.status(404).end();
        }
        else {
            res.status(200).end();
        };
    });

});

module.exports = router;
