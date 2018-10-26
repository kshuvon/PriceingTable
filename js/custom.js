(function($){
	"use strict";

	/**
     * ----------------------------------------------
     * about-carousel-sk1
     * ----------------------------------------------
     */
     $('.owl-carousel').owlCarousel({
    loop:true,
    margin:10,
    autoplay:true,
    nav:true,
    responsiveClass:true,
     navText:["<i class='fa fa-arrow-right'></i>", "<i class='fa fa-arrow-left'></i>"],
    responsive:{
        0:{
            items:1,
            
        },
        600:{
            items:1,
           
        },
        1000:{
            items:1,            
            loop:false
        }
    }
})

$(".readmore").readmore({
  speed: 75, // how fast to animate
  maxHeight: 20 // how much to show, in pixels, before the link to read more
});

})(jQuery); 