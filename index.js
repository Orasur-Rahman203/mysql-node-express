const express=require("express");
// const { send } = require("express/lib/response");
const server=express();
server.listen(5000, ()=>console.log("server is running"))
server.use(express.json())

// Mysql database connection
var mysql      = require('mysql');
var connection = mysql.createConnection({
  host     : 'localhost',
  user     : 'root',
  password : '',
  database : 'my_project'
});
 


server.get("/", (req, res)=>{
    connection.connect();
    connection.query('SELECT * FROM WP_OPTIONS', function (error, results, fields) {
        if (error) throw error;
        console.log('The solution is: ', error, fields);
      });
    res.json('fields')
    connection.end();
    // res.send("Hello World!!!")
})