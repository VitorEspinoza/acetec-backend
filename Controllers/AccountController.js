const express = require("express");

const app = express();
const bodyParser = require("body-parser");
const slugify = require("slugify");
const Account = require("../Models/Account");

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
