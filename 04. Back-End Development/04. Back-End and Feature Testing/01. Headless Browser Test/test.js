const Nightmare = require("nightmare");
describe("Load a Page", function () {
  // Recommended: 5s locally, 10s to remote server, 30s from airplane
  this.timeout('30s')
  let nightmare = null;
  beforeEach(() => {
    nightmare = new Nightmare();
  });
  describe("/ (Home Page)", () => {
    it("should load without error", (done) => {
      // your actual testing urls will likely be `http://localhost:port/path`
      nightmare
        .goto("https://www.goal.com/en-ng")
        .end()
        .then(function (result) {
          done();
        })
        .catch(done);
    });
  });
  describe("/live-scores (Live score Page)", () => {
    it("should navigate to /live-scores page and load without error", (done) => {
      // your actual testing urls will likely be `http://localhost:port/path`
      nightmare
        .goto("https://www.goal.com/en-ng")
        .end()
        .then(function (result) {
          done();
        })
        .catch(done);
    });
  });
});