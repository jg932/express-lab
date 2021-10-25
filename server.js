
// import modules
import express from 'express'
import * as aliensDB from './data/ST-aliens-db.js'

// Create Express app
const app = express()

// Configure the app
app.set('view engine', 'ejs')


// Mount Middleware



// Mount routes
app.get('/', function (req, res) {
  res.redirect('/home')
})

app.get('/home', function (req, res) {
  res.render('home')
})

app.get('/aliens', function(req, res) {
  aliensDB.find({}, function(error, aliens) {
    res.render('aliens/index', {
      aliens: aliens,
      error: error
    })
  })
})

// Tell the app to listen on port 3000

app.listen(3001, function() {
  console.log('Listening on port 3001')
})