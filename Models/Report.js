const Sequelize = require("sequelize");
const connection = require("../database/database");
const Volunteer = require("./Volunteer");
const Report = connection.define("reports", {
  date: {
    type: Sequelize.DATE,
    allowNull: false,
  },
  text: {
    type: Sequelize.TEXT,
    allowNull: false,
  },
});

Report.hasOne(Volunteer);
Volunteer.belongsTo(Report);

module.exports = Report;
