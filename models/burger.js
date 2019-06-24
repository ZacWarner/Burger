var orm = require("../config/orm.js");

var burger = {
    all: function (cb) {
        orm.selectAll("burger", function (res) {
            cb(res);
        });
    },

    create: function (name, cb) {
        orm.insertOnce("burger", name, function (res) {
            cb(res);
        });
    },

    update: function (id, condition, cb) {
        orm.updateOne("burger", id, condition, function (res) {
            cb(res);
        });
    }
};

module.exports = burger;