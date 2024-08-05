var casper = require("casper").create();

var searchTerm = "web scraping"; // The search term to use

casper.start(
  "https://www.google.com/search?q=" + encodeURIComponent(searchTerm),
  function () {
    this.echo('Results for "' + searchTerm + '":\n');
  }
);

casper.waitForSelector(".g", function () {
  var results = this.evaluate(function () {
    var resultsElements = document.querySelectorAll(".g");
    return Array.prototype.map.call(resultsElements, function (element) {
      var titleElement = element.querySelector(".rc .r a");
      var title = titleElement.innerText;
      var url = titleElement.href;
      var description = element.querySelector(".s .st").innerText;
      return { title: title, url: url, description: description };
    });
  });

  results.forEach(function (result) {
    console.log("Title: " + result.title);
    console.log("URL: " + result.url);
    console.log("Description: " + result.description);
    console.log("\n");
  });
});
casper.run();
