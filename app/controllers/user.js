const db = require("../models");
const TestResponse = db.testResponse
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

  exports.takeTest = (req, res) => {
    TestResponse.create({
        testID: req.params.testId,
        qna: req.body.qna,
        givenBy: req.userId
      })
      .then(
          res.send({message: "Test taken successfully!"})
      )
      .catch(err => {
        res.status(500).send({ message: err.message });
      });
  };

  exports.resultTest = (req, res) => {
    testID = req.params.testId
    userID = req.userId

    TestResponse.findOne({
      where : {
        testID : testID,
        givenBy : userID

      }
    })
    .then( test => {
      if(!test) {
        return res.status(404).send({ message: "Test Not found." });
      }
      
      correctAnswerCount = 0
      testInstance = test.dataValues
      totalQuestion = Object.keys(testInstance.qna).length

      for( i = 0; i < totalQuestion ; i++){
          stri = String(i)
          const correctAnswer = Test.findByPk(testID)
          .then(
            correctans => {
              if(testInstance.qna.stri.answer == correctans.dataValues.qna.stri.answer.correct){
                correctAnswerCount +=1
              }
            }
          )

      }
      res.json({"total percentage": correctAnswerCount/totalQuestion * 100})
    })

  };