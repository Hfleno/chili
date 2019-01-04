var express = require('express')
var path = require('path')
var app = express()

app.use(express.static(path.join(__dirname, './dist')))

var port = process.env.PORT || 8085

var server = app.listen(port, function() {
  var host = server.address().address
  var port = server.address().port

  console.log('Example app listening at http://%s:%s', host, port)
})
