var path = require('path')
var express = require('express')
var bodyParser = require('body-parser')
var cors = require('cors')
var path = require('path')

var server = express()
server.set('knex', db.knex)

server.use(bodyParser.json())
server.use(bodyParser.urlencoded({
  extended:true
}))

module.exports = server
