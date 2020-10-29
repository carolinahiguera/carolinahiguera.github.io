$(document).ready(function() {
	
	
// Initiate localScroll (the plugin for the scrolling animation)
	"use strict";
    $.localScroll({
		
		queue:true,
		duration:1000,
		hash:true,
		onBefore:function( e, anchor, $target ){
			// The 'this' is the settings object, can be modified
		},
		onAfter:function( anchor, settings ){
			// The 'this' contains the scrolled element (#content)
		}
		
		});
		
// End localScroll
 

//Iniatiate tipsy script
$('').tipsy({fade: true, gravity: 'n'});
$(' .facebook, .twitter, .rss, .dribbble,.download-btn').tipsy({fade: true, gravity: 's'});
$('').tipsy({fade: true, gravity: 'n'});
$('').tipsy({fade: true, gravity: 'e'});
//End tipsy script


// Custom script for the Select navigation on mobile/tablet devices by Chris Coyier http://css-tricks.com/convert-menu-to-dropdown/ (with some modification)




		  
});

$('.progress-bar').each(function() {
  "use strict";
  	var $bar = $(this);
    var progress = setInterval(function() {
      
      var currWidth = parseInt($bar.attr('aria-valuenow'));
      var maxWidth = parseInt($bar.attr('aria-valuemax'));
      
	  //update the progress
        $bar.width(currWidth+'%');
        $bar.attr('aria-valuenow',currWidth+10);
      
      //clear timer when max is reach
      if (currWidth >= maxWidth){
        clearInterval(progress);
      }
      
    }, 500);
  
});

$(document).ready(function () {

"use strict";
    //stick in the fixed 100% height behind the navbar but don't wrap it
    $('#slide-nav.navbar-inverse').after($('<div class="inverse" id="navbar-height-col"></div>'));
  
    $('#slide-nav.navbar-default').after($('<div id="navbar-height-col"></div>'));  

    // Enter your ids or classes
    var toggler = '.navbar-toggle';
    var pagewrapper = '#page-content';
    var navigationwrapper = '.navbar-header';
    var slidewidth = '45%';
    var menuneg = '-100%';
    var slideneg = '-80%';


    $("#slide-nav").on("click", toggler, function () {

        var selected = $(this).hasClass('slide-active');

        $('#slidemenu').stop().animate({
            left: selected ? menuneg : '0px'
        });

        $('#navbar-height-col').stop().animate({
            left: selected ? slideneg : '0px'
        });

        $(pagewrapper).stop().animate({
            left: selected ? '0px' : slidewidth
        });

        $(navigationwrapper).stop().animate({
            left: selected ? '0px' : slidewidth
        });


        $(this).toggleClass('slide-active', !selected);
        $('#slidemenu').toggleClass('slide-active');


        $('#page-content, .navbar, body, .navbar-header').toggleClass('slide-active');


    });


    var selected = '#slidemenu, #page-content, body, .navbar, .navbar-header';


    $(window).on("resize", function () {

        if ($(window).width() > 767 && $('.navbar-toggle').is(':hidden')) {
            $(selected).removeClass('slide-active');
        }


    });




});