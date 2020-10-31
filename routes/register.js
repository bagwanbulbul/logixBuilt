const express = require("express")
var app = express.Router();
app.use(express.json())
const add = require("../model/registrationDb");
var nodemailer = require("nodemailer")


app.post("/sign-up",function(req,res){
    let response = add.createUser()
    response.then((result)=>{
        res.send(result)
    })
    .catch((err)=>{
        console.log(err)
    })
})



app.post('/verify_email', (req, res, next) => {
      let user_mail = req.session.email;
      console.log(user_mail)
      User.findOne({
          email: user_mail
        })
        .then((result) => {
  
          let mailTransporter = nodemailer.createTransport({
            service: 'gmail',
            auth: {
              user: 'bulbul18@navgurukul.org',
              pass: 'bulbul18'
            }
          });
          let my_code = result.user_saring_code
          let mailDetails = {
            from: 'bulbul18@navgurukul.org',
            to: friend_email,
            subject: 'invitation For ookul aplication',
            html: '<h3 style="font-weight:bold;">Your friend have invite you to join ookul aplication. </h3><h3>This is you reffrence code <br>' + my_code + '<br><a href="http://localhost:3000/user_friend_sinup">click</a>'
          };
          mailTransporter.sendMail(mailDetails, function (err, data) {
            if (err) {
              console.log(err)
              console.log('Error Occurs');
            } else {
              console.log('Email verify successfully');
              res.send("your email verified ")
            }
          });
  
  
        }).catch((err) => {
          console.log(err)
          res.send(err)
        })
    
  
  })


module.exports = app