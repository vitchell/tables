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


$.cookie.json = true;

if(navigator.geolocation) {
  navigator.geolocation.getCurrentPosition(function(position){
    global_position = position;
  }, function(){
    console.log("Geolocation error");
  });
} else {
  console.log("Geolocation error");
}

$(document).ready(function(){
  $("#p-slider").slider();
});

