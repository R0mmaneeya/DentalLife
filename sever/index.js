const express = require("express");
const app = express();
const mysql = require("mysql2");
const cors = require("cors");
var bodyParser = require("body-parser");
var jsonParser = bodyParser.json();
const bcrypt = require("bcrypt");
const saltRounds = 10;
var jwt = require("jsonwebtoken");
app.use(cors());
const secret = "dfuq";

const db = mysql.createConnection({
  host: "127.0.0.1",
  user: "potkung",
  password: "kaiyang321",
  database: "dentallife",
});

db.connect(function (err) {
  if (err) throw err;
  console.log("Connected!");
});

app.post("/register", jsonParser, function (req, res, next) {
  bcrypt.hash(req.body.Password, saltRounds, function (err, hash) {
    db.execute(
      "INSERT INTO client(uuid,Email,Password,fname,lname) VALUES(?,?,?,?,?)",
      [req.body.id, req.body.Email, hash, req.body.fname, req.body.lname],
      function (err, results, fields) {
        if (err) {
          res.json({ status: "error", message: err });
          return;
        }
        res.json({ status: "ok" });
      }
    );
  });
});

app.post("/login", jsonParser, function (req, res, next) {
  db.execute(
    "SELECT * FROM client WHERE email=?",
    [req.body.Email],
    function (err, user, fields) {
      if (err) {
        res.json({ status: "error", eassage: err });
        return;
      }
      if (user.length == 0) {
        res.json({ status: "error", message: "no user found" });
        return;
      }
      bcrypt.compare(
        req.body.Password,
        user[0].password,
        function (err, isLogin) {
          if (isLogin) {
            email = user[0].email
            var token = jwt.sign({ Email: email }, secret, {
              expiresIn: "1h",
            });
            res.json({ status: "ok", message: "login success", token ,email});
          } else {
            res.json({ status: "error", message: "login failed" });
          }
        }
      );
    }
  );
});

app.post("/authen", jsonParser, function (req, res, next) {
  const token = req.headers.authorization.split(" ")[1];
  try {
    var decoded = jwt.verify(token, secret);
    res.json({ status: "ok", decoded });
  } catch (err) {
    res.status(400).json({ status: 'error', message: 'Authentication failed' });
  }
});
app.listen("3001", () => {
  console.log("sever is running on port 3001");
});
