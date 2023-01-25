const express = require("express");

const app = express();
const bodyParser = require("body-parser");
const slugify = require("slugify");
const Account = require("../Models/Account");

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.post("/account", async (request, response) => {
  var { email, userName, password } = request.body;

 let account = await Account.findOne({
    where: {
      email: email,
    },
  })

    if(account) {
        return response.status(200).json({
            message: "Email already existing."
        });
      }
      else {
        Account.Create({
            email: email,
            userName: userName,
            password: password,
            slug: slugify(userName),
          })
            .then(() => {
                return response.status(200).json({
                    message: "Register account successfully."
                });
            })
            .catch(() => {});
      }
  });


  

