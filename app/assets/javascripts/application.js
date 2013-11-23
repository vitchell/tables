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
//= require_tree ./components
//= require jquery
//= require jquery_ujs
//= require_tree .




$.cookie.json = true;

// global variables are so gross -- TODO clean up later
var global_cart = $.cookie("shopping_cart");
var global_index = 0; 

$(document).ready(function(){

  $("#p-slider a").click(function(e){
    var index = parseInt( $(this).attr("href").replace("#", "") );
    activatePaneByIndex( index );
    e.preventDefault();
    return false;
  });

  $(window).resize(function(){ 
    activatePaneByIndex(global_index) 
  });

  $(window).keydown(function(e){
    if( $( document.activeElement ).is("input[type=text]") ) return;
    if( e.which == 39 ){
      activatePaneByIndex( global_index + 1 );
    }else if( e.which == 37 ){
      activatePaneByIndex( global_index - 1 );
    }
  });

});


function activatePaneByIndex( index ){
  if( index < 0 || index > 4 ) return; // TODO: make this modular and not hardcoded
  var motion_size = $("#p-form").eq(0).outerWidth(true);
  $("#p-slider").animate({left: "-"+(index * motion_size)+"px" }, 400, "linear");
  global_index = index;
  $("nav>ul>li").removeClass("gp-step-current").eq(index).addClass("gp-step-current");
  if( index == 4 )$("nav>ul>li").addClass("gp-step-current");
}
