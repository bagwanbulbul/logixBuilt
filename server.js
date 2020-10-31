const express = require('express');
const app =express();
var nodemailer = require("nodemailer")

const register = require('./routes/register');
app.use("/register",register);

const verify= require("./routes/register")
app.use("/verify", verify)


app.listen(3000,()=>{
    console.log("server is listening 3000 ....")

});