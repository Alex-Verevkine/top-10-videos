const app = require("../../app");
const chai = require("chai");
const chaiHttp = require("chai-http");
const expect = chai.expect;
const HttpStatus = require("http-status-codes");
chai.use(chaiHttp);

describe("GET /api/videos", function() {
  it("should GET videos array", function(done) {
    chai
      .request(app)
      .get("/api/videos")
      .end(function(err, res) {
        expect(res).to.have.status(HttpStatus.OK);
        expect(res.body.data).to.be.an("array");
        done();
      });
  });
});

describe("GET to not existing path", function() {
  it("should response with 404", function(done) {
    chai
      .request(app)
      .get("/api/notexisting")
      .end(function(err, res) {
        expect(res).to.have.status(HttpStatus.NOT_FOUND);
        done();
      });
  });
});
