var express = require("express");
var friends = require("../data/friends.js");

var app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

module.exports = function (app) {
    app.get("/api/friends", function(req, res) {
        return res.json(friends);
    });
    
    app.post("/api/friends", function(req, res) {
        var user = req.body;
        console.log(user);
    })
}

