var connection = require("../config/connection.js");

var orm = {
    selectAll: function (table, cb) {
        var query = "SELECT * FROM " + table + ";";
        connection.query(query, function (err, res) {
            if (err) {
                throw err;
            }
            cb(res);
        });
    },

    insertOnce: function (table, name, cb) {
        var query = "INSERT INTO " + table + " (burger_name) VALUES ('" + name + "');";
        console.log(query);
        connection.query(query, function (err, res) {
            if (err) {
                throw err;
            }
            cb(res);
        });

    },

    updateOne: function (table, id, condition, cb) {
        var query = "UPDATE " + table + " SET devoured = " + condition + " where id = " + id + ";"
        console.log(query);
        connection.query(query, function (err, res) {
            if (err) {
                throw err;
            }
            cb(res);
        });
    }
};

module.exports = orm;