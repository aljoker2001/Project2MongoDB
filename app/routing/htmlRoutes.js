var express = require('express');
var path = require('path');
var fs = require('fs');

var app = express();

app.use(express.urlencoded({extended: true}));
app.use(express.json());

var homePage = () => {
    app.get("/", function (req, res) {
        res.sendFile(path.join(__dirname, "../public/home.html"));
    });
    console.log("home page");
}

var survey = () => {
    app.get("/survey", function (req, res) {
        res.sendFile(path.join(__dirname, "../public/survey.html"));
    });
    console.log("survey page");
}

var test = () => {
    console.log("this works");
}

module.exports = {
    homePage: function () {app.get("/", function (req, res) {
        res.sendFile(path.join(__dirname, "../public/home.html"));
    })},
    survey: function () {app.get("/survey", function (req, res) {
        res.sendFile(path.join(__dirname, "../public/survey.html"));
    })},
    test: test
}