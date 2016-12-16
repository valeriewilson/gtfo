// Run this function after the page has loaded

$(document).ready(function() {

  $.ajax({
    url: "http://api.wunderground.com/api/ef5a156e62f050d2/conditions/q/WA/Seattle.json",
    dataType: "json",
    success: function(url) {
      var temp_f = url.current_observation.temp_f;
      $("#seattle-weather").html(temp_f + "ºF");
    }
  });

  $.ajax({
    url: "http://api.wunderground.com/api/ef5a156e62f050d2/conditions/q/IL/Chicago.json",
    dataType: "json",
    success: function(url) {
      var temp_f = url.current_observation.temp_f;
      $("#chicago-weather").html(temp_f + "ºF");
    }
  });

  $.ajax({
    url: "http://api.wunderground.com/api/ef5a156e62f050d2/conditions/q/NY/New_York.json",
    dataType: "json",
    success: function(url) {
      var temp_f = url.current_observation.temp_f;
      $("#nyc-weather").html(temp_f + "ºF");
    }
  });

  $.ajax({
    url: "http://api.wunderground.com/api/ef5a156e62f050d2/conditions/q/HI/Maui.json",
    dataType: "json",
    success: function(url) {
      var temp_f = url.current_observation.temp_f;
      $("#maui-weather").html(temp_f + "ºF");
    }
  });

  $.ajax({
    url: "http://api.wunderground.com/api/ef5a156e62f050d2/conditions/q/OR/Portland.json",
    dataType: "json",
    success: function(url) {
      console.log(url);
      var location = 'Columbus';
      var temp_f = url.current_observation.temp_f;
      $("#portland-weather").html(temp_f + "ºF");
    }
  });
});
