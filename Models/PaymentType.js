const Sequelize = require("sequelize");
const connection = require("../database/database");

const PaymentType = connection.define("paymentTypes", {
  typeName: {
    type: Sequelize.STRING,
    allowNull: false,
  },
});

module.exports = PaymentType;
