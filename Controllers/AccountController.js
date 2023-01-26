const express = require("express");

const app = express();
const bodyParser = require("body-parser");
const slugify = require("slugify");
const Account = require("../Models/Account");
const bcrypt = require("bcryptjs");
const config = require("../config")
const jwt = require("jsonwebtoken");
const res = require("express/lib/response");

app.use(cors());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.post("/account", async (request, response) => {
  var { email, userName, password } = request.body;

 let account = await Account.findOne({
    where: {
      email: email,
    },
  })

    if(account) 
        return response.status(400).json({
            message: "Email already existing."
        });
      
      else {
        var salt = bcrypt.genSaltSync(10);
        var hash = bcrypt.hashSync(password, salt);
        Account.Create({
            email: email,
            userName: userName,
            password: hash,
            slug: slugify(userName),
            adminPermission: false,
            activeAccount: false
          })
            .then(() => {
                return response.status(200).json({
                    message: "Register account successfully."
                });
            })
            .catch(() => {});
      }
  });


  app.post("/account/login", async(request, response) => {
    var { email, password } = request.body;

    const account = await Account.findOne({
      where: {
        email: email
      }
    })

    if(account)

    if(account.activeAccount == false)
        return response.status(401).json({
          message: "This account be inactive"
        })

    let passwordIsCorrect = bcrypt.compareSync(password, account.password);

     if (passwordIsCorrect) {
              jwt.sign({
                permission: account.adminPermission ? 'admin' : 'volunteer'
              }, config.jsonKey,{ expiresIn: '48h' }, (err, token) => {
                if(err)
                  res.status(400).json({message: 'Intern Fail'})            
                else 
                  res.status(200).json({token: token})
              })
            }
    else {
             return response.status(404).json({
            message: "Invalid email"
        });
        }
      
  })

  app.put("account/active/:id", async (request, response) => {
    let id = parseInt(request.params.id)

    if(isNaN(id))
      response.status(400).json({message: "invalid id"});
      else {
        Account.findOne({
           where: {
        id: id
      }
        })
      }

      
  })
  

