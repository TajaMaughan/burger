var express = require("express");
var router = express.Router();
var burger = require("../models/burger.js");

router.get("/", function(req, res){
    burger.selectAll(function(data) {
        var hbsObject = {
            burgers: data
        };
        res.render("index", hbsObject)
    });
})

router.post("/burger/create", function(req, res) {
    burger.insertOne([req.body.burger_name], function(result){
        res.redirect("/");
    })
})

router.post("/burger/eat/:id", function(req, res) {
    burger.updateOne([req.params.id], function(result) {
        res.redirect("/");
    })
})

module.exports = router;