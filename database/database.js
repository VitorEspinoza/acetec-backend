const Sequelize = require("sequelize");

const connection = new Sequelize("acetec", "root", "senhamysq", {
  host: "localhost",
  dialect: "mysql",
  timezone: "-03:00",
});

module.exports = connection;
