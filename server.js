var express = require('express');
var app = express();

const config = require("./config");

app.get('/', function (req, res) {

  var sql = require('mssql');

  // Open Sql Server Configuration Manager,
  // and enable TCP/IP protocol from SQL Server Network Configuration
  // Port 1433
  console.log("Connecting sql server...");
  sql.connect(config, function (err) {
    if (err) {
      console.log(err);
      return;
    };

    var request = new sql.Request();

    // query to the database and get the records
    request.query('SELECT * FROM xxx', function (err, recordset) {
      if (err) {
        console.log(err);
        return;
      };

    // send records as a response
    res.send(recordset);
    });
  });
});

// Run web server (default address : 127.0.0.1:5000)
var server = app.listen(5000, function () {
    console.log('Server is running..');
});
