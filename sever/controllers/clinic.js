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
    function (err, results, fields) {
      if (err) {
        res.json({ status: "error", message: err });
        return;
      }
      res.json({ status: "Scheduling Complete" });
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
    function (err, results, fields) {
      if (err) {
        res.json({ status: "error", message: err });
        return;
      }
      res.json({ status: "register Complete" });
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
    function (err, results, fields) {
      if (err) {
        res.json({ status: "error", message: err });
        return;
      }
      res.json({ status: "UPDATE Complete" });
    }
  );
};

exports.dataDent = (req, res, next) => {
  db.execute(
    "SELECT * FROM dentist WHERE clinicID = ?",
    [req.body.clinicID],
    (err, results) => {
      if (err) {
        console.log(err);
      } else {
        res.send(results);
      }
    }
  );
};

exports.dataSheduling = (req, res, next) => {
  db.execute(
    "SELECT TimeOfScheduling FROM scheduling WHERE DateOfScheduling = ? and IDClinicForScheduling =?",
    [req.body.date, req.body.id],
    (err, results) => {
      if (err) {
        console.log(err);
      } else {
        res.send(results);
      }
    }
  );
};
