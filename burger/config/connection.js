// Set up MySQL connection.
var mysql = require("mysql");

var connection = mysql.createConnection({
  host: "us-cdbr-iron-east-02.cleardb.net",
  port: 3306,
  user: "b6fae93b30576c",
  password: "1aea5aa6",
  database: "heroku_0ca5e5a43b7cf16"
});

mysql://b6fae93b30576c:1aea5aa6@us-cdbr-iron-east-02.cleardb.net/heroku_0ca5e5a43b7cf16?reconnect=true

connection.connect(function(err) {
  if (err) {
    console.error("error connecting: " + err.stack);
    return;
  }
  console.log("connected as id " + connection.threadId);
});

// Export connection for our ORM to use.
module.exports = connection;
