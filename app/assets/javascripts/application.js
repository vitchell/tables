// This is a manifest file that'll be compiled into application.js, which will include all the files
// listed below.
//
// Any JavaScript/Coffee file within this directory, lib/assets/javascripts, vendor/assets/javascripts,
// or vendor/assets/javascripts of plugins, if any, can be referenced here using a relative path.
//
// It's not advisable to add code directly here, but if you do, it'll appear at the bottom of the
// compiled file.
//
// Read Sprockets README (https://github.com/sstephenson/sprockets#sprockets-directives) for details
// about supported directives.
//
//= require jquery
//= require jquery_ujs
//= require jquery.ui.core
//= require jquery.ui.widget
//= require_tree ./components
//= require_tree .


// global variables are so gross -- TODO clean up later
var global_cart = $.cookie("shopping_cart");
var global_position = null;

$.cookie.json = true;

$(document).ready(function(){
  $("#tb-card-holder").slider();

  $("#tb-cities a").click( function(e){
    $("#tb-card-holder").removeClass("tb-card-holder-hidden");
    e.preventDefault();
    return false;
  });

  $("#tb-reset-to-start").click( function(e){
    $("#tb-card-holder").addClass("tb-card-holder-hidden");
    e.preventDefault();
    return false;
  });

});


if(navigator.geolocation) {
  navigator.geolocation.getCurrentPosition(function(position){
    global_position = position;

    var closest = {
      ptr: null,
      val: 100000000
    };

    $("#tb-cities>li").each(function(){
      var lat1 = parseFloat($(this).attr("lat"));
      var lon1 = parseFloat($(this).attr("lon"));
      
      var distance = haversine( lat1, lon1, global_position.coords.latitude, global_position.coords.longitude);
      $(this).attr("distance", distance);

      if( distance < closest.val ){
        closest.val = distance;
        closest.ptr = $(this);
      }

    });

    if( closest.ptr != null ){
      $(".tb-city-selected").removeClass("tb-city-selected");
      closest.ptr.addClass("tb-city-selected");  
    }

  }, function(){
    console.log("Geolocation error");
  });
} else {
  console.log("Geolocation error");
}

function haversine(lat1, lon1, lat2, lon2){
  var R = 6371; // km
  var dLat = (lat2-lat1).toRad();
  var dLon = (lon2-lon1).toRad();
  var lat1 = lat1.toRad();
  var lat2 = lat2.toRad();

  var a = Math.sin(dLat/2) * Math.sin(dLat/2) +
          Math.sin(dLon/2) * Math.sin(dLon/2) * Math.cos(lat1) * Math.cos(lat2); 
  var c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1-a)); 
  var d = R * c;

  return d;
}

if (typeof(Number.prototype.toRad) === "undefined") {
  Number.prototype.toRad = function() {
    return this * Math.PI / 180;
  }
}









































































$(document).ready(function() {
  $("#tb-wrapper > h1").click(function() {
    $("#tb-wrapper").toggleClass("tb-splash");
  });
});

$(window).resize(function() {
  $("#tb-wrapper").removeClass("tb-splash");
});

















































































