// Run this function after the page has loaded

// $(document).ready(function() {

//   $.ajax({
//     url: "http://api.wunderground.com/api/ef5a156e62f050d2/forecast10day/q/WA/Seattle.json",
//     dataType: "json",
//     success: function(url) {
//       for (i = 1; i < 9; i++) {
//         base_url = url.forecast.simpleforecast.forecastday[i];
//         $("#seattle-day-" + i).html(base_url.date.weekday + ", " + base_url.date.month + "/" + base_url.date.day);
//         $("#seattle-icon-" + i).attr("src", base_url.icon_url);
//         $("#seattle-temp-" + i).html(base_url.low.fahrenheit + "ºF - " + base_url.high.fahrenheit + "ºF");
//       }
//     }
//   });

//   $.ajax({
//     url: "http://api.wunderground.com/api/ef5a156e62f050d2/forecast10day/q/IL/Chicago.json",
//     dataType: "json",
//     success: function(url) {
//       for (i = 1; i < 9; i++) {
//         base_url = url.forecast.simpleforecast.forecastday[i];
//         $("#chicago-day-" + i).html(base_url.date.weekday + ", " + base_url.date.month + "/" + base_url.date.day);
//         $("#chicago-icon-" + i).attr("src", base_url.icon_url);
//         $("#chicago-temp-" + i).html(base_url.low.fahrenheit + "ºF - " + base_url.high.fahrenheit + "ºF");
//       }
//     }
//   });

//   $.ajax({
//     url: "http://api.wunderground.com/api/ef5a156e62f050d2/forecast10day/q/NY/New_York.json",
//     dataType: "json",
//     success: function(url) {
//       for (i = 1; i < 9; i++) {
//         base_url = url.forecast.simpleforecast.forecastday[i];
//         $("#nyc-day-" + i).html(base_url.date.weekday + ", " + base_url.date.month + "/" + base_url.date.day);
//         $("#nyc-icon-" + i).attr("src", base_url.icon_url);
//         $("#nyc-temp-" + i).html(base_url.low.fahrenheit + "ºF - " + base_url.high.fahrenheit + "ºF");
//       }
//     }
//   });

//   $.ajax({
//     url: "http://api.wunderground.com/api/ef5a156e62f050d2/forecast10day/q/HI/Maui.json",
//     dataType: "json",
//     success: function(url) {
//       for (i = 1; i < 9; i++) {
//         base_url = url.forecast.simpleforecast.forecastday[i];
//         $("#maui-day-" + i).html(base_url.date.weekday + ", " + base_url.date.month + "/" + base_url.date.day);
//         $("#maui-icon-" + i).attr("src", base_url.icon_url);
//         $("#maui-temp-" + i).html(base_url.low.fahrenheit + "ºF - " + base_url.high.fahrenheit + "ºF");
//       }
//     }
//   });

//   $.ajax({
//     url: "http://api.wunderground.com/api/ef5a156e62f050d2/forecast10day/q/OR/Portland.json",
//     dataType: "json",
//     success: function(url) {
//       for (i = 1; i < 9; i++) {
//         base_url = url.forecast.simpleforecast.forecastday[i];
//         $("#portland-day-" + i).html(base_url.date.weekday + ", " + base_url.date.month + "/" + base_url.date.day);
//         $("#portland-icon-" + i).attr("src", base_url.icon_url);
//         $("#portland-temp-" + i).html(base_url.low.fahrenheit + "ºF - " + base_url.high.fahrenheit + "ºF");
//       }
//     }
//   });
// });


$(function () {

  
  var Airport = ['SEA']

  for (i = 0; i < 1; i++) {

    var FlightRequest = {
          "request": {
            "slice": [
              {
                "origin": "SFO",
                "destination": Airport[i],
                "date": "2016-12-31",
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
    console.log(FlightRequest);
    var Airp = Airport[i];

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
                  cheap_flight = JSON.stringify(data);
                  cheapest_flight = data.trips.tripOption[0].saleTotal;
                  console.log(Airport[i]);
                  $('#price-' + Airp).html(cheapest_flight);
                  console.log(FlightRequest);
                },
                error: function(){
                   //Error Handling for our request
                   alert("Access to Google QPX Failed.");
                } 
              });
  // closing ajax
  };
});