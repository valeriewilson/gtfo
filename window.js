// Run this function after the page has loaded

$(document).ready(function() {

  $.ajax({
    url: "http://api.wunderground.com/api/ef5a156e62f050d2/conditions/q/OH/Columbus.json",
    dataType: "json",
    success: function(url) {
      console.log(url);
      var location = 'Columbus';
      var temp_f = url.current_observation.temp_f;
      $(".conditions").html("Current temperature in " + location + " is: " + temp_f + "ºF");
    }
  });
});
