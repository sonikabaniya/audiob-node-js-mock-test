module.exports = (sequelize, Sequelize) => {
    const TestReview = sequelize.define("testReviews", {
        testId: {
            type: Sequelize.INTEGER
          },
          userId: {
            type: Sequelize.INTEGER
          },
          status: {
            type: Sequelize.STRING
          },
          comment: {
            type: Sequelize.ARRAY(Sequelize.TEXT)
          },
          history: {
            type: Sequelize.ARRAY(Sequelize.TEXT)
          },

    });
  
    return TestReview;
  };