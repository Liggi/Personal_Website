$(function () {
	$('.obsessions img').mouseenter(function () {
		var overlayNum = $(this).index("img") - 1;
		
		$('.obsessions .overlay' + overlayNum).fadeIn();
		$('.obsessions .overlay' + overlayNum).unbind().mouseleave(function () {
			$(this).fadeOut();
		});
	});
	
	$('nav[role=navigation] ul li:last-of-type').click(function() {
		$('.tab-overlay').show();
		$('.contact-overlay').show();
		
		return false;
	});
	
	$('.contact-overlay a:contains("Cancel")').click(function () {
		$('.tab-overlay').hide();
		$('.contact-overlay').hide();
		
		return false;		
	});
});