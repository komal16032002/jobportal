const Company = require("../models/company")
const repo = require("../repository/companyRepo");
const jwt = require("jsonwebtoken");

exports.signup=(req,res)=>{
const user = req.body;
console.log(user);
const company = new Company(user.name,user.email,user.website,user.employeeSize,user.password);
repo.createCompany(company,()=>{
    res.send("company is created");
})
}

exports.signin=(req,res)=>{
    repo.loginCompany(req.body.email,req.body.password,(err,rows)=>{
        if(err){
            return res.end("Invalid email or password");
        }
     const token=jwt.sign(
         {email:req.body.email},
         "PRIVATEKEY",
         {
             expiresIn: "2h"
         }
     );
    return res.status(200).end(token);
    })
   }
