const express = require("express")
var app = express.Router();
app.use(express.json())
const add = require("../model/registrationDb");

app.post("/sign-up",function(req,res){
    let response = add.createUser ()

    response.then((result)=>{
        res.send(result)
    })
    .catch((err)=>{
        console.log(err)
    })
})

module.exports = app