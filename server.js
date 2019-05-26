const express = require('express');
const path = require('path');
const htmlRoutes = require('./app/routing/htmlRoutes.js');
const apiRoutes = require('./app/routing/apiRoutes.js');

var PORT = process.env.PORT || 3000;
var app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

htmlRoutes.homePage();
htmlRoutes.survey();
htmlRoutes.test();

app.get("/", function (req, res) {
    res.sendFile(path.join(__dirname, "app/public/home.html"));
})
// apiRoutes;

app.listen(PORT, function() {
    console.log(`App is listening on port ${PORT}`);
    htmlRoutes.homePage();
    htmlRoutes.survey();
})