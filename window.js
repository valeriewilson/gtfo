// Run this function after the page has loaded
$(function () {

  var fs = require('fs');

  var googleKey = require('key');

  // var HEADERS = {
  //   'Authorization': 'Bearer ' + googleKey
  // };

  var FlightRequest = {
      "request": {
        "slice": [
          {
            "origin": "SFO",
            "destination": "SEA",
            "date": "2016-12-17",
            "maxStops": 0,
            "permittedDepartureTime": {
              "kind": "qpxexpress#timeOfDayRange",
              "earliestTime": "08:00",
              "latestTime": "23:00"
            },
          }
        ],
        "passengers": {
          "adultCount": 1,
          "infantInLapCount": 0,
          "infantInSeatCount": 0,
          "childCount": 0,
          "seniorCount": 0
        },
        "solutions": 20,
        "refundable": false,
        "maxPrice": "USD500",
      }
    };

  var cheap_flight;
  var cheapest_flight;

  $.ajax(
    {
     type: "POST",
     //Set up your request URL and API Key.
     url: "https://www.googleapis.com/qpxExpress/v1/trips/search?key=AIzaSyDAVdOCLWDAYcHfew6_8YmIkvCkukCaCJU", 
     contentType: 'application/json', // Set Content-type: application/json
     dataType: 'json',
     // The query we want from Google QPX, This will be the variable we created in the beginning
     data: JSON.stringify(FlightRequest),
     success: function (data) {
      //Once we get the result you can either send it to console or use it anywhere you like.
      console.log(JSON.stringify(data));
      cheap_flight = JSON.stringify(data);
      cheapest_flight = cheap_flight.trips.tripOption[0].saleTotal
    },
      error: function(){
       //Error Handling for our request
       alert("Access to Google QPX Failed.");
     }
    }
  );

  // $.ajax(url).done(function (csv) {
  //   // Split the output up into an array of lines
  //   var lines = csv.trim().split('\n');

  //   // Iterate over each line
  //   for (var i = 0; i < lines.length; i++) {
  //     //Split the line up by comma
  //     var prices = lines[i].split(',');

  //     // Previous closing price of stock symbol
  //     var previousPrice = parseFloat(prices[0], 10);

  //     // Current price of stock symbol
  //     var currentPrice = parseFloat(prices[1], 10);

  //     // Change between closing price and current price rounded to 2 decimal points.
  //     var change = Math.round((currentPrice - previousPrice) * 100) / 100;

  //     // Add a leading + for positive change
  //     if (change >= 0) {
  //       change = '+' + change;
  //     }

  //     // Add prices and changes to HTML element
  //     if (i === 0) { // Oil
  //       $('#oil-price').text(currentPrice.toLocaleString());
  //       $('#oil-change').text(change);
  //     } else if (i == 1) { // Gold
  //       $('#gold-price').text(currentPrice.toLocaleString());
  //       $('#gold-change').text(change);
  //     } else if (i == 2) { // Silver
  //       $('#silver-price').text(currentPrice.toLocaleString());
  //       $('#silver-change').text(change);
  //     } else if (i == 3) { // Platinum
  //       $('#platinum-price').text(currentPrice.toLocaleString());
  //       $('#platinum-change').text(change);
  //     }
  //   }
  // }).fail(function (error) {
  //   console.error(error);
  // });

});
