// Run this function after the page has loaded

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
