var mysql = require('mysql');
var connection = mysql.createConnection({
  host: "localhost",
  port: 3306,
  user: "root", //Your username
  password: "E$*G8Y1el6rn0AshUb6YY5Nm6F62103$", //Your password
  database: "parties_db"
})

connection.connect(function(err) {
  if (err) throw err;
  console.log("connected as id " + connection.threadId);
})

module.exports = connection;