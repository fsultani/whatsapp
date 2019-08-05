const express = require('express')
const path = require('path')
const bodyParser = require('body-parser')
const axios = require('axios');

const app = express()

// Body Parser Middleware
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))

// Set static folder
app.use(express.static(path.join(__dirname, 'public')))

app.get('/', (req, res, next) => {
  res.sendFile(path.join(__dirname, 'index.html'))
})

app.get('/sitemap.xml', (req, res, next) => {
  res.sendFile(path.join(__dirname, 'sitemap.xml'))
})

app.post('/start', (req, res) => {
  res.send(`https://api.whatsapp.com/send?phone=${req.body.number}`)
})

const port = process.env.PORT || 3000;

app.listen(port, () => {
  console.log("Listening on port " + port)
  if (process.send) {
    process.send('online');
  }
})

module.exports = app;
