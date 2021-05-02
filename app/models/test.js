module.exports = (sequelize, Sequelize) => {
    const Test = sequelize.define("tests", {
        name: {
            type: Sequelize.STRING
          },
          qna: {
            type: Sequelize.JSON
          }
    });
  
    return Test;
  };