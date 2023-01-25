const Sequelize = require("sequelize");
const connection = require("../database/database");

const FrequentQuestion = connection.define("frequentQuestions", {
  questionText: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  answer: {
    type: Sequelize.STRING,
    allowNull: false,
  },
});

module.exports = FrequentQuestion;
