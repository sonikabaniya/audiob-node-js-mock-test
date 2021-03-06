const { authJwt } = require("../middleware");
const controller = require("../controllers/user");

module.exports = function(app) {
  app.use(function(req, res, next) {
    res.header(
      "Access-Control-Allow-Headers",
      "x-access-token, Origin, Content-Type, Accept"
    );
    next();
  });

  app.get("/api/test/all", controller.allAccess);

  app.get(
    "/api/test/user",
    [authJwt.verifyToken],
    controller.userBoard
  );

  app.get(
    "/api/test/admin",
    [authJwt.verifyToken, authJwt.isAdmin],
    controller.adminBoard
  );

  app.post(
    "/api/create/test",
    [authJwt.verifyToken, authJwt.isAdmin],
    controller.createTest
  );

  app.post(
    "/api/take/test/:testId",
    [authJwt.verifyToken],
    controller.takeTest
  );

  app.get(
    "/api/result/test/:testId",
    [authJwt.verifyToken],
    controller.resultTest
  );

  app.post(
    "/api/review/:userId/test/:testId",
    [authJwt.verifyToken, authJwt.isAdmin],
    controller.reviewTest
  );

  app.post(
    "/api/super-review/:userId/test/:testId",
    [authJwt.verifyToken, authJwt.isSuperReviewer],
    controller.reviewTest
  );
};