const db = require("../dbConfig");

module.exports.clinic = function (req, res, next) {
  db.query("SELECT * FROM clinic", (err, results) => {
    if (err) {
      console.log(err);
    } else {
      res.send(results);
    }
  });
};

module.exports.craft = function (req, res, next) {
  db.query("SELECT * FROM craft", (err, results) => {
    if (err) {
      console.log(err);
    } else {
      res.send(results);
    }
  });
};

module.exports.scheduling = function (req, res, next) {
  db.execute(
    "INSERT INTO scheduling VALUES(?,?,?,?,?)",
    [
      req.body.IDClinic,
      req.body.NameDent,
      req.body.craft,
      req.body.date,
      req.body.time,
    ],
    (err, results) => {
      if (err) {
        console.log(err);
      } else {
        res.send(results);
      }
    }
  );
};

exports.regisDent = function (req, res, next) {
  db.execute(
    "INSERT INTO dentist VALUES(?,?,?,?,?,?,?,?,?,?)",
    [
      req.body.profesID,
      req.body.fname,
      req.body.lname,
      req.body.Tel,
      req.body.idLine,
      req.body.craft,
      req.body.uuid,
      req.body.rlg,
      req.body.nation,
      req.body.DOB,
    ],
    (err, results) => {
      if (err) {
        console.log(err);
      } else {
        res.send(results);
      }
    }
  );
};

exports.edit = function (req, res, next) {
  db.execute(
    "UPDATE dentist SET Firstname = ?,Lastname = ?,Tel = ?,ID_line = ?,DentistCraft = ?,ID_card = ?,Religion = ?,Nationality = ?,DateOfBirth = ? WHERE ProfessionalLicenseNumber = ?;",
    [
      req.body.fname,
      req.body.lname,
      req.body.Tel,
      req.body.idLine,
      req.body.craft,
      req.body.uuid,
      req.body.rlg,
      req.body.nation,
      req.body.DOB,
      req.body.profesID,
    ],
    (err, results) => {
      if (err) {
        console.log(err);
      } else {
        res.send(results);
      }
    }
  );
};

exports.dataDent = () => {
  db.query("SELECT * FROM dentist", (err, results) => {
    if (err) {
      console.log(err);
    } else {
      res.send(results);
    }
  });
};

exports.dataSheduling = ()=>{
  
}
