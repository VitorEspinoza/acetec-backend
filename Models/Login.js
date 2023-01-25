const Sequelize = require("sequelize");
const connection = require("../database/database");

const Login = connection.define("logins", {
  email: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  userName: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  password: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  slug: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  adminPermission: {
    type: Sequelize.BOOLEAN,
    allowNull: false,
  },
});

module.exports = Login;
