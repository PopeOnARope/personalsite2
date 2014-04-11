$(document).ready(function() {

	$('.popup').hide();

	$('.winview').click(function(){
		event.preventDefault();
		$('.popup').fadeIn('slow');
	});

	$('.popup').click(function(){
		$(this).fadeOut('slow');
	});
});