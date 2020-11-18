const express = require('express')
const app = express()
const path = require('path')

const PORT = process.env.PORT || 4000

app.use('/public', express.static(__dirname + '/public'))

app.get('/', function(req, res) {
  res.sendFile(path.join(__dirname + '/index.html'))
})

app.listen(PORT, () => {
  console.log(`The app is running on http://localhost:${PORT}`)
})