// Requiring path to so we can use relative routes to our HTML files
var path = require("path");
//
module.exports = function(app) {
//
  app.get("/", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/index.html"));
  });

  app.get("/sheeting", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/sheeting.html"));
  });

  app.get("/printing", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/printing.html"));
  });

  app.get("/laminating", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/laminating.html"));
  });

  app.get("/cutting", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/cutting.html"));
  });
//
};