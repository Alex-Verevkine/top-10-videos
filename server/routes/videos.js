const { Router } = require("express");
const ResponseMiddlewares = require("../middlewares/response.middlewares");
const videosController = require("../controllers/videos.controller");

module.exports = (() => {
  const router = Router();

  router.route("/").get([videosController.getVIdeos]);

  router.use(
    "*",
    ResponseMiddlewares.responseHandlerMiddlware.bind(ResponseMiddlewares)
  );

  return router;
})();
