const Sequelize = require("sequelize");
const connection = require("../database/database");
const PaymentType = require("./PaymentType");

const Donation = connection.define("donations", {
  value: {
    type: Sequelize.DECIMAL(10, 2),
    allowNull: false,
  },
});

Donation.hasOne(PaymentType);
PaymentType.belongsTo(Donation);

module.exports = Donation;
