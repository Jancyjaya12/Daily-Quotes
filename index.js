// Dependencies
const express = require("express");
const quotes = require('./quotes');
const utils = require('./utils');

// Initialize express application.
const server = express();

server.get("/",function(request,response){
  // Fetch a random quote from the quotes array.
  let quote = utils.getRandomElement(quotes)
  // Send it to the user.
  response.send(`" ${quote} "`)
});

// Start the server on port 3000.
server.listen(3000, function () {
  console.log("😎 Server started on http://localhost:3000");
});