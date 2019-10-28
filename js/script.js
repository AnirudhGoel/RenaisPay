/*
Animation for Navbar color and size
*/ 
$(window).on("scroll load", function() {
	if ($(document).scrollTop() > 0) {
		$('nav').addClass('shrinkNav');
	} else {
		$('nav').removeClass('shrinkNav');
	}
});

function autoScroll(sectionClass) {
	$('html, body').animate({
		scrollTop: $("." + sectionClass).offset().top
	}, 750);
}

$(window).load(function() {
	$(".loader").fadeOut("fast");

	// Call WOW.js
	new WOW().init();
});