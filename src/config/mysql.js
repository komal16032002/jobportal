
const mysql = require("mysql2");

const connection = mysql.createConnection(
    {
        host:"localhost",
        user:"root",
        password:"4523",
        database:"jobPortal",
        multipleStatements:true
    }
);

module.exports = connection;
