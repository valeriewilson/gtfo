// Run this function after the page has loaded

$(document).ready(function() {

  $.ajax({
    url: "http://api.wunderground.com/api/ef5a156e62f050d2/conditions/q/WA/Seattle.json",
    dataType: "json",
    success: function(url) {
      var temp_f = url.current_observation.temp_f;
      var conditions = url.current_observation.icon_url;
      $("#seattle-weather").html(temp_f + "ºF");
      $("#seattle-weather-img").attr("src", conditions);
    }
  });

  $.ajax({
    url: "http://api.wunderground.com/api/ef5a156e62f050d2/conditions/q/IL/Chicago.json",
    dataType: "json",
    success: function(url) {
      var temp_f = url.current_observation.temp_f;
      var conditions = url.current_observation.icon_url;
      $("#chicago-weather").html(temp_f + "ºF");
      $("#chicago-weather-img").attr("src", conditions);
    }
  });

  $.ajax({
    url: "http://api.wunderground.com/api/ef5a156e62f050d2/conditions/q/NY/New_York.json",
    dataType: "json",
    success: function(url) {
      var temp_f = url.current_observation.temp_f;
      var conditions = url.current_observation.icon_url;
      $("#nyc-weather").html(temp_f + "ºF");
      $("#nyc-weather-img").attr("src", conditions);
    }
  });

  $.ajax({
    url: "http://api.wunderground.com/api/ef5a156e62f050d2/conditions/q/HI/Maui.json",
    dataType: "json",
    success: function(url) {
      var temp_f = url.current_observation.temp_f;
      var conditions = url.current_observation.icon_url;
      $("#maui-weather").html(temp_f + "ºF");
      $("#maui-weather-img").attr("src", conditions);
    }
  });

  $.ajax({
    url: "http://api.wunderground.com/api/ef5a156e62f050d2/conditions/q/OR/Portland.json",
    dataType: "json",
    success: function(url) {
      var temp_f = url.current_observation.temp_f;
      var conditions = url.current_observation.icon_url;
      $("#portland-weather").html(temp_f + "ºF");
      $("#portland-weather-img").attr("src", conditions);
    }
  });
});
