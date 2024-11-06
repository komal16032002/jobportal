
const db=require("../config/mysql")


exports.createStudent=(student,cb)=>{
  db.query("insert into student(name,email,phone,qualification,password) values('"+student.name+"','"+student.email+"','"+student.phone+"','"+student.qualification+"','"+student.password+"')",(err)=>{
      if(!err){
          cb();
      }else{
         console.log(err);
          throw new Error(err);
      }
  })
}

exports.loginStudent = (email,password,cb)=>{
    const query = "select email from student where email ='"+email+"' and password = '"+password+"'"
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