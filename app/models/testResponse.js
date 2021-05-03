module.exports = (sequelize, Sequelize) => {
    const TestResponse = sequelize.define("testResponses", {
        name: {
            type: Sequelize.STRING
          },
          qna: {
            type: Sequelize.JSON
          },
          givenBy: {
            type: Sequelize.STRING
          },
          reviewedBy:{
            type: Sequelize.ARRAY(Sequelize.TEXT) 
          }
    });
  
    return TestResponse;
  };