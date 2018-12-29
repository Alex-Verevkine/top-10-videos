const FacebookVideoIdRGX = new RegExp(/^\d+$/); // facebook video id validation regex.
const YoutubeVideoIdRGX = new RegExp(/((\w|-){11})/); // youtube video id validation regex.

export const YOUTUBE_PLAYER = "youtube"; // youtube video source type.
export const FACEBOOK_PLAYER = "facebook"; //f acebook video source type.
export const STANDARD_PLAYER = "url"; // standard video type whith source url.
export const ALL_PLAYERS = "all";

/**
 * @desc get video source url by type.
 * @param  {} element provided video source id / standard video url.
 * @param  {} type video source type.
 */
export function getSourceUrl(element, type) {
  switch (type) {
    case YOUTUBE_PLAYER:
      if (!YoutubeVideoIdRGX.test(element)) {
        throw new Error("Invalid Youtube Video Id!");
      }
      return `https://www.youtube.com/embed/${element}`;
    case FACEBOOK_PLAYER:
      if (!FacebookVideoIdRGX.test(element)) {
        throw new Error("Invalid Facebook Video Id!");
      }
      return `https://www.facebook.com/video/embed?video_id=${element}`;
    case STANDARD_PLAYER:
    default:
      if (!(element.length > 0)) {
        throw new Error("Video Source Required!");
      }
      return element;
  }
}
