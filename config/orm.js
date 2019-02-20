var connection = require("./connection.js");

var orm = {
  selectAll: function (tableInput, next) {
    var queryString = "SELECT * FROM ??;";
    connection.query(queryString, [tableInput], function (err, result) {
      if (err) throw err;
      next(result);
    });
  },
  insertOne: function (val, next) {
    var queryString = "INSERT INTO burgers (burger_name) VALUES (?) ";

    console.log(queryString);

    connection.query(queryString, [val], function (err, result) {
      if (err) throw err;
      console.log(result);
      next(result);
    });
  },
  updateOne: function (burgerId, next) {
    var queryString = "UPDATE burgers SET devoured = true WHERE id = ?";

    console.log(queryString);
    connection.query(queryString, [burgerId], function (err, result) {
      if (err) throw err;
      console.log(result);
      next(result);
    });
  }
}

module.exports = orm;