$(function() {
	var width = 1920;
	var sliderSpeed = 1000;
	var pause = 2000;
	var activeSlide = 1;

	var $slider = $('#slider');
	var $slideBox = $('.slides', $slider);
	var $slides = $('.slide', $slider);

	var interval;
	function startSlider() {
		// body...
		interval = setInterval(function() {
			$slideBox.animate({'margin-left': '-='+ width}, sliderSpeed, function() {
					activeSlide += 1;
				if (activeSlide === $slides.length) {
					activeSlide = 1;
					$slideBox.css('margin-left', 0);
				}
			});
		}, pause);
	}
	function pauseSlider() {
		clearInterval(interval);
	}

	$slideBox
	.on('mouseenter', pauseSlider)
	.on('mouseleave', startSlider);

	startSlider();

});