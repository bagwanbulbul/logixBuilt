const knex = require("../connection")

let createUser = ()=>{
    return knex('users').insert({
        emailId: req.body.emailId,
        userName:req.body.userName,
        password:req.body.password
    })
}

module.exports={createUser} 