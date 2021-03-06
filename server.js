// *********************************************************************************
// SERVER.JS - THIS FILE INITIATES YOUR ENTIRE APPLICATION. IT"S YOUR APP FOUNDATION!
// *********************************************************************************

require('dotenv').config()
// var key = require('./key')
// console.log(process.env.APIXU_KEY)
// const apixu = process.env.APIXU_KEY

const express = require('express')
// const exphbs = require('express-handlebars')
/* eslint-disable no-unused-vars */
const db = require('./models/example')

const app = express()
const PORT = process.env.PORT || 3000
const ENV = process.env.NODE_ENV || 'development'
/* eslint-enable no-unused-vars */
// Middleware
app.use(express.urlencoded({ extended: false }))
app.use(express.json())
app.use(express.static('public'))

// Handlebars
// app.engine(
//   'handlebars',
//   exphbs({
//     defaultLayout: 'main'
//   })
// )
// app.set('view engine', 'handlebars')

// Routes
require('./routes/apiRoutes')(app)
require('./routes/htmlRoutes')(app)

// require('./public/js/coach')(apixu)

// Starting our Express app
// =============================================================
app.listen(PORT, function () {
  console.log(
    '==> 🌎  Listening on port %s. Visit http://localhost:%s/ in your browser.',
    PORT,
    PORT)
})

module.exports = app
