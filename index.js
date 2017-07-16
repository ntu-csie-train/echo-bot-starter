const express = require('express')
const bodyParser = require('body-parser')

const PORT = process.env.PORT || 3000

const app = express()
// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))

// parse application/json
app.use(bodyParser.json())

app.get('/facebook', function (req, res) {
  console.log('query:', req.query);
  console.log('body:', req.body);
  res.send('hello facebook from GET');
})

app.post('/facebook', function (req, res) {
  console.log('query:', req.query);
  console.log('body:', req.body);
  res.send('hello facebook from POST');
})

app.get('/line', function (req, res) {
  console.log('query:', req.query);
  console.log('body:', req.body);
  res.send('hello line from GET');
})

app.post('/line', function (req, res) {
  console.log('query:', req.query);
  console.log('body:', req.body);
  res.send('hello line from POST');
})

app.get('/telegram', function (req, res) {
  console.log('query:', req.query);
  console.log('body:', req.body);
  res.send('hello telegram from GET');
})

app.post('/telegram', function (req, res) {
  console.log('query:', req.query);
  console.log('body:', req.body);
  res.send('hello telegram from POST');
})


app.listen(PORT, function () {
  console.log('Example app listening on port 3000!')
})