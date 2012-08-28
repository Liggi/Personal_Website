$(function () {
	$('.obsessions img').mouseenter(function () {
		var overlayNum = $(this).index("img") - 1;
		
		$('.obsessions .overlay' + overlayNum).fadeIn();
		$('.obsessions .overlay' + overlayNum).unbind().mouseleave(function () {
			$(this).fadeOut();
		});
	});
});