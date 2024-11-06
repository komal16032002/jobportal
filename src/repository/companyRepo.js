const db=require("../config/mysql")


exports.createCompany=(company,cb)=>{
  db.query("insert into company(name,email,website,employeeSize,password) values('"+company.name+"','"+company.email+"','"+company.website+"','"+company.employeeSize+"','"+company.password+"')",(err)=>{
      if(!err){
          cb();
      }else{
         console.log(err);
          throw new Error(err);
      }
  })
}

exports.loginCompany = (email,password,cb)=>{
    const query = "select email from company where email ='"+email+"' and password = '"+password+"'"
  db.query(query,(err,rows)=>{
      if(!err){
          console.log(rows);
          cb(null,rows);
      }else{
          console.log(err);
         cb(err, null)
      }
  })
}