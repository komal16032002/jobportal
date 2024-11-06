const express = require("express");
const server =  express();
const studentRoutes = require("./src/routes/student");
const companyRoutes = require("./src/routes/company");
const bodyParser = require("body-parser");

server.use(bodyParser.json());

server.use("/api/student",studentRoutes);
server.use("/api/company",companyRoutes);



server.get("/",(req,res)=>{
    res.end("Welcome to job portal");
})

server.listen(4000,()=>{
    console.log("server is start running");
});