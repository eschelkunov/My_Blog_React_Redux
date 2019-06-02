'use strict';

var mysql = require('mysql');
var config = require('./database');

var connection = mysql.createConnection(config);

connection.connect((err) => {
  if (err) {
    throw err;
  }
  console.log('MySql Connected');
});


module.exports=connection;
