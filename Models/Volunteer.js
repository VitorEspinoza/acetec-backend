const Sequelize = require("sequelize");
import { DataTypes } from "sequelize";
const connection = require("../database/database");
const Address = require("./Adress");
const Volunteer = connection.define("volunteers", {
  idLogin: {
    type: DataTypes.BIGINT,
    allowNull: false,
  },
  firstName: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  secondName: {
    type: Sequelize.STRING,
    allowNull: true,
  },
  lastName: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  CPF: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  phone: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  waitingList: {
    type: Sequelize.BOOLEAN,
    allowNull: false,
  },
});

Volunteer.hasOne(Address);
Address.belongsTo(Volunteer);

module.exports = Volunteer;
