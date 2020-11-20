// *********************************************************************************
// api-routes.js - this file offers a set of routes for displaying and saving data to the db
// *********************************************************************************

// Dependencies
// =============================================================
const csv = require("csvtojson");
// Sheeting files
const fileData = "/Users/malbright/Desktop/Developer/advisoryOEE/config/data.csv"

// Routes
// =============================================================
module.exports = function (app) {
  // Main route /////////////////////////////////////
  app.get("/api/data", function (req, res) {
    csv()
    .fromFile(fileData)
    .then((jsonObj) => {
      console.log(jsonObj)
      res.json(jsonObj)
    });    
  });
}