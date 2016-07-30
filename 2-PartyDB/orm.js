var connection = require('./config/connection.js');

var orm = {
  findAndOrder: function(whatToSelect, table, orderCol, orderBy) {
    var queryString = 'SELECT ' + whatToSelect + ' FROM ' + table + ' ORDER BY ' + orderCol + ' ' + orderBy;
    console.log(queryString);
    connection.query(queryString, function(err, result) {
      console.log(result);
    })
  }
}

module.exports = orm;