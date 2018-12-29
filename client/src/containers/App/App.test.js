import {
  getSourceUrl,
  YOUTUBE_PLAYER,
  FACEBOOK_PLAYER,
  STANDARD_PLAYER
} from "../../utills/videoUtils";
import nFormatter from "../../utills/nFormatter";

const assert = require("assert");

describe("Source URL", () => {
  it("should return youtube source", function() {
    const sourceVideo = getSourceUrl("1ac2Q12ae12", YOUTUBE_PLAYER);
    assert.equal(sourceVideo, `https://www.youtube.com/embed/1ac2Q12ae12`);
  });
  it("should return facebook source", function() {
    const sourceVideo = getSourceUrl("123123", FACEBOOK_PLAYER);
    assert.equal(
      sourceVideo,
      `https://www.facebook.com/video/embed?video_id=123123`
    );
  });
  it("should return external url source", function() {
    const sourceVideo = getSourceUrl(
      "https://external-url.com",
      STANDARD_PLAYER
    );
    assert.equal(sourceVideo, `https://external-url.com`);
  });
});

describe("nFormatter", () => {
  it("should return the shortcut string of a number - Mega", function() {
    const stringNumber = nFormatter("1000000");
    assert.equal(stringNumber, "1M");
  });
  it("should return the shortcut string of a number - Kilo", function() {
    const stringNumber = nFormatter("100000");
    assert.equal(stringNumber, "100k");
  });
  it("should return the shortcut string of a number", function() {
    const stringNumber = nFormatter("10");
    assert.equal(stringNumber, "10");
  });
});
