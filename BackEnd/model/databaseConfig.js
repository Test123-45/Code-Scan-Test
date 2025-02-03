require('dotenv').config();
var mysql = require('mysql2');


var dbconnect = {
  getConnection: function() {
    var conn = mysql.createConnection({
      host: process.env.DB_HOST || "localhost",
      user: process.env.DB_USER,
      password: process.env.DB_PASS,
      database: process.env.DB_NAME
    });
    return conn;
  }
};

module.exports = dbconnect;