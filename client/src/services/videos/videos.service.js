import HttpService from "../http/basic/http.service";

export class VideosService {
  /**
   * @desc HTTP get videos service.
   * @param  {} videoSource selected video source.
   */
  static getVideos(videoSource) {
    let videoSourceQueryParam = videoSource ? `?source=${videoSource}` : "";
    return HttpService.get(
      `http://localhost:8000/api/videos${videoSourceQueryParam}`
    ).then(videos => {
      return Promise.resolve(videos);
    });
  }
}
