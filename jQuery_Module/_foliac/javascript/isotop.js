
$('#isotop-content').isotope({
	itemSelector: '.img',
	layoutMode: 'masonry'
});

$('.buttons ul').on('click', 'li', function(){
	$('.buttons ul li').removeClass('active');
	$('.buttons ul li').css('border', 'none')
	
	$(this).addClass('active');
	$(this).css('border', '2px solid #FF8C00')

	var filterValue = $(this).attr('data-filter');
	$('#isotop-content').isotope({filter: filterValue});
});	

// $('.isotop-filter ul li').click(function(){
// 	$('.isotop-filter ul li').removeClass('active');
// 	$(this).addClass('active');

// 	var trigger = $(this).attr('data-filter');
// 	$('isotop-content').isotope({
// 		filter: trigger
// 	});
// });	