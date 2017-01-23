
$('.isotop-content').isotope({
	itemSelector: "div[class^='img']",
	layoutMode: 'masonry'
});

$('.isotop-filter ul li').click(function(){
	$('.isotop-filter ul li').removeClass('active');
	$(this).addClass('active');

	var trigger = $(this).attr('data-filter');
	$('isotop-content').isotope({
		filter: trigger
	});
});	