import HttpUtilsService from "./httpUtills.service";
import HttpParams from "../../../models/HttpParams";
import axiosHTTPInstance from "../axios.http";

export default class HttpService {
  /**
   * @desc HTTP get method.
   * @param  {} url provided url.
   * @param  {} params request options.
   */
  static async get(url, params) {
    if (!params) {
      params = new HttpParams();
    }

    params.requestType = "GET";
    params.url = url;

    return this.performRequest(params);
  }

  /**
   * @desc request action.
   * @param  {} params provided request parameters.
   */
  static async performRequest(params) {
    const httpData = HttpUtilsService.getHttpData(
      params.url,
      params.requestType,
      params.headers,
      params.body
    );
    try {
      const response = await axiosHTTPInstance(httpData);
      if (response.status === 200) {
        return response.data;
      }
    } catch (error) {
      return Promise.reject(error);
    }
  }
}
