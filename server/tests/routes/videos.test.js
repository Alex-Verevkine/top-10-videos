const app = require("../../app");
const chai = require("chai");
const request = require("supertest");
const expect = chai.expect;
const HttpStatus = require("http-status-codes");

describe("GET /api/videos", function() {
  it("should GET videos array", function(done) {
    request(app)
      .get("/api/videos")
      .end(function(err, res) {
        expect(res.status).to.eq(HttpStatus.OK);
        expect(res.body.data).to.be.an("array");
        done();
      });
  });
});

describe("GET to not existing path", function() {
  it("should response with 404", function(done) {
    request(app)
      .get("/api/notexisting")
      .end(function(err, res) {
        expect(res.status).to.eq(HttpStatus.NOT_FOUND);
        done();
      });
  });
});
