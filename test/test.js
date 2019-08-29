var should = require("should");
var supertest = require("supertest");

var server = supertest.agent("http://localhost:4000");

describe("File upload test cases", function() {
  it("should upload file", function(done) {
    server
      .post("/api/photo")
      .field("filename", "userPhotos")
      .attach("file", "test/as.jpeg")
      .expect(200)
      .end(function(err, res) {
        res.status.should.equal(200);
        done();
      });
  });
});
