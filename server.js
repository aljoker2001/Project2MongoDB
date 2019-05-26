const express = require('express');
const path = require('path');
var app = express();
var allFriends = require('./app/data/friends')

var PORT = process.env.PORT || 3000;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

require(path.join(__dirname, './app/routing/htmlRoutes.js'))(app);
require(path.join(__dirname, "./app/routing/apiRoutes.js"))(app);

app.post("/api/friends", function (req, res) {
    // req.body hosts is equal to the JSON post sent from the user
    // This works because of our body parsing middleware
    var newFriend = req.body;
    console.log("new friend:", newFriend);
    allFriends.friends.push(newFriend);

    // We then display the JSON to the users
    res.json(allFriends.friends);
});

app.listen(PORT, function() {
    console.log(`App is listening on port ${PORT}`);
})