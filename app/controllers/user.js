const db = require("../models");
const Test = db.test;

exports.allAccess = (req, res) => {
    res.status(200).send("Public Content.");
  };
  
  exports.userBoard = (req, res) => {
    res.status(200).send("User Content.");
  };
  
  exports.adminBoard = (req, res) => {
    res.status(200).send("Admin Content.");
  };

  exports.createTest = (req, res) => {
    Test.create({
        name: req.body.name,
        qna: req.body.qna
      })
      .then(
          res.send({message: "Test created successfully!"})
      )
      .catch(err => {
        res.status(500).send({ message: err.message });
      });
  };