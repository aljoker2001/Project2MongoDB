var friends = require("../data/friends.js");

module.exports = function (app) {
    app.get("/api/friends", function(req, res) {
        return res.json(friends);
    });
    
    app.post("/api/friends", function (req, res) {
        // req.body hosts is equal to the JSON post sent from the user
        // This works because of our body parsing middleware
        var newFriend = req.body;
        console.log("new friend:", newFriend);
        friends.push(newFriend);
    
        // We then display the JSON to the users
        res.json(friends);
    });
}

