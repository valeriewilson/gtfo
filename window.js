// Run this function after the page has loaded
// Weather section
$(document).ready(function() {

  $.ajax({
    url: "http://api.wunderground.com/api/ef5a156e62f050d2/forecast10day/q/WA/Seattle.json",
    dataType: "json",
    success: function(url) {
      for (i = 1; i < 9; i++) {
        base_url = url.forecast.simpleforecast.forecastday[i];
        $("#seattle-day-" + i).html(base_url.date.weekday + ", " + base_url.date.month + "/" + base_url.date.day);
        $("#seattle-icon-" + i).attr("src", base_url.icon_url);
        $("#seattle-temp-" + i).html(base_url.low.fahrenheit + "ºF - " + base_url.high.fahrenheit + "ºF");
      }
    }
  });

  $.ajax({
    url: "http://api.wunderground.com/api/ef5a156e62f050d2/forecast10day/q/IL/Chicago.json",
    dataType: "json",
    success: function(url) {
      for (i = 1; i < 9; i++) {
        base_url = url.forecast.simpleforecast.forecastday[i];
        $("#chicago-day-" + i).html(base_url.date.weekday + ", " + base_url.date.month + "/" + base_url.date.day);
        $("#chicago-icon-" + i).attr("src", base_url.icon_url);
        $("#chicago-temp-" + i).html(base_url.low.fahrenheit + "ºF - " + base_url.high.fahrenheit + "ºF");
      }
    }
  });

  $.ajax({
    url: "http://api.wunderground.com/api/ef5a156e62f050d2/forecast10day/q/NY/New_York.json",
    dataType: "json",
    success: function(url) {
      for (i = 1; i < 9; i++) {
        base_url = url.forecast.simpleforecast.forecastday[i];
        $("#nyc-day-" + i).html(base_url.date.weekday + ", " + base_url.date.month + "/" + base_url.date.day);
        $("#nyc-icon-" + i).attr("src", base_url.icon_url);
        $("#nyc-temp-" + i).html(base_url.low.fahrenheit + "ºF - " + base_url.high.fahrenheit + "ºF");
      }
    }
  });

  $.ajax({
    url: "http://api.wunderground.com/api/ef5a156e62f050d2/forecast10day/q/HI/Maui.json",
    dataType: "json",
    success: function(url) {
      for (i = 1; i < 9; i++) {
        base_url = url.forecast.simpleforecast.forecastday[i];
        $("#maui-day-" + i).html(base_url.date.weekday + ", " + base_url.date.month + "/" + base_url.date.day);
        $("#maui-icon-" + i).attr("src", base_url.icon_url);
        $("#maui-temp-" + i).html(base_url.low.fahrenheit + "ºF - " + base_url.high.fahrenheit + "ºF");
      }
    }
  });

  $.ajax({
    url: "http://api.wunderground.com/api/ef5a156e62f050d2/forecast10day/q/OR/Portland.json",
    dataType: "json",
    success: function(url) {
      for (i = 1; i < 9; i++) {
        base_url = url.forecast.simpleforecast.forecastday[i];
        $("#portland-day-" + i).html(base_url.date.weekday + ", " + base_url.date.month + "/" + base_url.date.day);
        $("#portland-icon-" + i).attr("src", base_url.icon_url);
        $("#portland-temp-" + i).html(base_url.low.fahrenheit + "ºF - " + base_url.high.fahrenheit + "ºF");
      }
    }
  });
});


// price section
var Airp =[];
$(function () {

  var Flight = [];
  var Airport = ['SEA','CHI','JFK','OGG','PDX'];

  for (indice = 0; indice < 6; indice++) {
    console.log(indice);
    var FlightRequest = {
          "request": {
            "slice": [
              {
                "origin": "SFO",
                "destination": Airport[indice],
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
    Flight.push(FlightRequest);
    Airp.push(Airport[indice]);
    console.log(Airp[1]);

    };
    $.ajax(
            {
               type: "POST",
               //Set up your request URL and API Key.
               url: "https://www.googleapis.com/qpxExpress/v1/trips/search?key=AIzaSyCiaOI2IohigcbshXjRJUxQg05eC0-u-j0", 
               contentType: 'application/json', // Set Content-type: application/json
               dataType: 'json',
               // The query we want from Google QPX, This will be the variable we created in the beginning
               data: JSON.stringify(Flight[0]),
               success: function (data) {
                  //Once we get the result you can either send it to console or use it anywhere you like.
                  cheap_flight = JSON.stringify(data);
                  cheapest_flight = data.trips.tripOption[0].saleTotal;
                  $("#price-"+ 1).html(cheapest_flight);
                },
                error: function(){
                   //Error Handling for our request
                   alert("Access to Google QPX Failed.");
                } 
              });

    $.ajax(
            {
               type: "POST",
               url: "https://www.googleapis.com/qpxExpress/v1/trips/search?key=AIzaSyCiaOI2IohigcbshXjRJUxQg05eC0-u-j0", 
               contentType: 'application/json', 
               dataType: 'json',
               data: JSON.stringify(Flight[1]),
               success: function (data) {
                  cheap_flight = JSON.stringify(data);
                  cheapest_flight = data.trips.tripOption[0].saleTotal;
                  $("#price-"+ 2).html(cheapest_flight);  
                },
                error: function(){
                   alert("Access to Google QPX Failed.");
                } 
              });
  // closing ajax
$.ajax(
            {
               type: "POST",
               url: "https://www.googleapis.com/qpxExpress/v1/trips/search?key=AIzaSyCiaOI2IohigcbshXjRJUxQg05eC0-u-j0", 
               contentType: 'application/json', 
               dataType: 'json',
               data: JSON.stringify(Flight[2]),
               success: function (data) {
                  cheap_flight = JSON.stringify(data);
                  cheapest_flight = data.trips.tripOption[0].saleTotal;
                  $("#price-"+ 3).html(cheapest_flight);  
                },
                error: function(){
                   alert("Access to Google QPX Failed.");
                } 
              });
$.ajax(
            {
               type: "POST",
               url: "https://www.googleapis.com/qpxExpress/v1/trips/search?key=AIzaSyCiaOI2IohigcbshXjRJUxQg05eC0-u-j0", 
               contentType: 'application/json', 
               dataType: 'json',
               data: JSON.stringify(Flight[3]),
               success: function (data) {
                  cheap_flight = JSON.stringify(data);
                  cheapest_flight = data.trips.tripOption[0].saleTotal;
                  $("#price-"+ 4).html(cheapest_flight);  
                },
                error: function(){
                   alert("Access to Google QPX Failed.");
                } 
              });
$.ajax(
            {
               type: "POST",
               url: "https://www.googleapis.com/qpxExpress/v1/trips/search?key=AIzaSyCiaOI2IohigcbshXjRJUxQg05eC0-u-j0", 
               contentType: 'application/json', 
               dataType: 'json',
               data: JSON.stringify(Flight[3]),
               success: function (data) {
                  cheap_flight = JSON.stringify(data);
                  cheapest_flight = data.trips.tripOption[0].saleTotal;
                  $("#price-"+ 5).html(cheapest_flight);  
                },
                error: function(){
                   alert("Access to Google QPX Failed.");
                } 
              });

});