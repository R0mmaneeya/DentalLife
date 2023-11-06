const express = require("express");
const app = express();
const mysql = require("mysql");
const cors = require("cors");

app.use(cors());

const db = mysql.createConnection({
  host: "127.0.0.1",
  user: "potkung",
  password: "kaiyang321",
  database:"dentallife"
});
db.connect(function(err) {
    if (err) throw err;
    console.log("Connected!");
  });
  
  app.get('/booking' , (req,res)=>{
    db.query("SELECT * FROM booking;", (err,result)=>{
      if(err){
        console.log(err);
      }else{
        res.send(result);
      }
    });
  });

  app.listen('3001',()=>{
    console.log("sever is running on port 3001");
  })