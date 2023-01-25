const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const connection = require("./database/database");

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

connection
  .autheticate()
  .then(() => {
    console.log("conexão feita com sucesso");
  })
  .catch((error) => console.log(error));
