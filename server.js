const express = require('express');
const path = require('path');
var app = express();
var allFriends = require('./app/data/friends');
var bodyParser = require('body-parser');

var PORT = process.env.PORT || 3000;

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

require(path.join(__dirname, './app/routing/htmlRoutes.js'))(app);
require(path.join(__dirname, "./app/routing/apiRoutes.js"))(app);

console.log(allFriends);


app.listen(PORT, function() {
    console.log(`App is listening on port ${PORT}`);
})