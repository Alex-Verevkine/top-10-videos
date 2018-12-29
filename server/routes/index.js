const { Router } = require("express");
const HttpStatus = require("http-status-codes");
const ResponseMiddlewares = require("../middlewares/response.middlewares");
const videosRouter = require("./videos");
const AppError = require("../Error/AppError");

module.exports = app => {
  const router = Router();
  router.get("*", (req, res, next) => {
    next(new AppError(HttpStatus.NOT_FOUND, "Not Found!"));
  });
  app.use("/api/videos", videosRouter);
  app.use("/", router);
  app.use(ResponseMiddlewares.errorHandlerMiddleware.bind(ResponseMiddlewares));
};
