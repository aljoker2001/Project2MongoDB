# FriendFinder

Are you a sad, lonely troglodyte in need of some human interaction?  If so, this is the app for you.  Just fill out the brief survey and you will be matched up with your perfect friend!

## Link to App

https://polar-sea-33252.herokuapp.com/

## User Experience

Upon arrival at the home page, the user has the option to go to the survey, check out the API list of existing friends, or head on over to the GitHub repo.

![home-page](/images/homePage.png)

If the user decides to take the survey, once completed, they will be presented a modal of their perfect friend.

![perfect-friend](/images/perfectFriend.png)

## Code Explanation

    * The app is comprosed of a `server.js` file, two HTML files - `home.html` and `survey.html`, two routing files for the HTML files and API data - `htmlRoutes.js` and `apiRoutes.js`, and the data file containing all prepopulated friend information - `friends.js`.
    * The `server.js` file requires both routing files as well as the data file.
    * Upon executing the `node server.js` command or the `npm start` command, the server starts listening on either the user's predefined PATH port or port 3000.

## Required dependencies/technologies

The dependencies and technologies required for this app were:

    * HTML
    * Javascript
    * Express.js
    * Node.js
    * Path
    * body-parser
    * Bootstrap