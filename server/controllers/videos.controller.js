const { videos } = require("../dal/videos");
const HttpStatus = require("http-status-codes");
const ResponseMiddlewares = require("../middlewares/response.middlewares");
class VideosController {
  /**
   * @desc Get requested video objects array sorted by views, if source was provided array will bi filtered by source and return to 10.
   */
  getVIdeos(req, res, next) {
    try {
      const { source } = req.query;
      let videoItems = [...videos];
      if (source) {
        videoItems = videoItems
          .filter(videoItem => videoItem.source === source)
          .sort((a, b) => b.views - a.views)
          .splice(0, 10);
      } else {
        videoItems.sort((a, b) => b.views - a.views);
      }
      ResponseMiddlewares.sendResponseData(
        res,
        HttpStatus.OK,
        "Success",
        videoItems,
        next
      );
    } catch (error) {
      next((new AppError().stack = error.stack));
    }
  }
}

module.exports = new VideosController();
