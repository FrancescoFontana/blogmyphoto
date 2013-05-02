var express = require('express');
var app = express.createServer(express.static(__dirname + '/'));
app.listen(process.env.PORT || 5000);