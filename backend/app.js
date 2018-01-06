const express = require('express')
const bodyParser = require('body-parser')
var cors = require('cors')

var Client = require('node-rest-client').Client

var client = new Client()

const app = express()
app.use(cors())
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

app.post('/getlocation', (req, res) => {
  const typeWord = req.body.city

  client.get(
    'https://maps.googleapis.com/maps/api/place/textsearch/json?query=' +
      typeWord +
      '&key=AIzaSyD2sk5QvJa8fjjBtQBQKbq5nOi - W0O3WWU',
    function(data, response) {
      // parsed response body as js object
      console.log(data)
      // raw response
      // console.log(response)
    }
  )
})

app.listen(3001, () => {
  console.log('port 3001')
})
