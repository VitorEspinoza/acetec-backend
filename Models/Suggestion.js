const Sequelize = require("sequelize");
const connection = require("../database/database");

const Suggestion = connection.define("suggestions", {
  title: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  text: {
    type: Sequelize.TEXT,
    allowNull: false,
  },
});

module.exports = Suggestion;
