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

	//show slide menu
	$('#slideMenuIcon').click(() => {
		$('#overlay').css('display', 'block');
		$('#slideNav').removeClass('hide-slide-menu').addClass('show-slide-menu');
	});

	// close slide menu
	$('#closeSlideMenuIcon').click(() => {
		$('#slideNav').removeClass('show-slide-menu').addClass('hide-slide-menu');
		$('#overlay').css('display', 'none');
	});

	// show sub slide menu
	$('.slide-menu-item').click(function () {
		const subId = $(this).attr('data-toggle-id');
		if (subId) {
			const subMenu = $(`#${subId}`);
			if (subMenu.hasClass('hide')) {
				subMenu.removeClass('hide').addClass('show');
				$(this).children('span').removeClass('arrow-down').addClass('arrow-up');
				subMenu.show(250);
			} else {
				subMenu.removeClass('show').addClass('hide');
				$(this).children('span').removeClass('arrow-up').addClass('arrow-down');
				subMenu.hide(250);
			}
		}
	});

	// change theme
	$('#themeBtn').click(function () {
		console.log('run');
		const nextTheme =
			localStorage.getItem('theme') === 'light' ? 'dark' : 'light';

		$(':root').attr('data-theme', nextTheme);
		localStorage.setItem('theme', nextTheme);

		// change icon
		if ($(this).hasClass('fa-sun'))
			$(this).removeClass('fa-sun').addClass('fa-moon');
		else $(this).removeClass('fa-moon').addClass('fa-sun');
	});
});
