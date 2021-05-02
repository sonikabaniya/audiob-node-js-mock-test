const db = require("./app/models");
const Role = db.role;

db.sequelize.sync({force: true}).then(() => {
    console.log('Drop and Resync Db');
    initial();
  });

function initial() {
    Role.create({
      id: 1,
      name: "user"
    });
   
    Role.create({
      id: 2,
      name: "admin"
    });
  }