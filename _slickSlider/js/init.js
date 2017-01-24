;(function($){
	"use strict";

	$(function(){
	  $('.ba-slider').slick({
	  	dots: true,
	  	infinite: true,
	  	prevArrow: ".ba-slider__arrow1",
	  	nextArrow: ".ba-slider__arrow2",
	  	slide: "img",
  		slidesToShow: 3,
  		slidesToScroll: 1
	  });
	})
})(jQuery);


// $(document).ready(function(){
//   $('.ba-headline').slick({
//     infinite: true,
//   	slidesToShow: 3,
//   	slidesToScroll: 3
//   });
// });