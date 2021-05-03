module.exports = (sequelize, Sequelize) => {
    const TestResponse = sequelize.define("testResponses", {
        testID: {
            type: Sequelize.STRING
          },
          qna: {
            type: Sequelize.JSON
          },
          givenBy: {
            type: Sequelize.INTEGER
          }
    });
  
    return TestResponse;
  };