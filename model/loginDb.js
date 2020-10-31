const knex = require("../connection")

let loginUser = ()=>{
    return knex('users').select({
        emailId: req.body.emailId,
        userName:req.body.userName,
    }).from("users")
}

module.exports={loginUser} 