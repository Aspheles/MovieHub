var mysql = require('mysql');
require('dotenv').config();

// Connecting to database

var con = mysql.createConnection({
    host: process.env.DBHOST,
    user: process.env.DBUSER,
    password: process.env.DBPASSWORD,
    database: process.env.DBNAME

});

con.connect(function(err){
    if(err) throw err;

    console.log("You are connected to the database");
})


module.exports = con;