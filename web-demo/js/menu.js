/// <reference path="D:\tips\typings\jquery\globals\jquery\index.d.ts" />
$(document).ready(function () {
	// show search bar
	$('#openSearchIcon').click(function () {
		$(this).hide();
		$('#closeSearchIcon').show(100);
		$('#searchBar').show(100);
	});

	// hide search bar
	$('#closeSearchIcon').click(function () {
		$(this).hide();
		$('#searchBar').hide(100);
		$('#openSearchIcon').show(100);
	});

	// menu-item
	$('.menu-item').mouseenter(function () {
		const subMenu = $(this).find('.sub-menu');
		subMenu.fadeIn(250);
		subMenu.mouseleave(function () {
			$(this).fadeOut(250);
		});
	});
});
