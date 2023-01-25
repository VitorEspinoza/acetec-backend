const Sequelize = require("sequelize");
const connection = require("../database/database");

const Adress = connection.define("Adresses", {
  number: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  street: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  city: {
    type: Sequelize.STRING,
    allowNull: true,
  },
  zipCode: {
    type: Sequelize.STRING,
    allowNull: false,
  },
});

module.exports = Adress;
