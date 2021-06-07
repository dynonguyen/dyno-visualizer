/// <reference path="D:\tips\typings\jquery\globals\jquery\index.d.ts" />

function getAndSetTheme() {
	const isLight = localStorage.getItem('theme') === 'light' ? true : false;
	if (isLight) {
		$(':root').attr('data-theme', 'light');
		$('#themeBtn').addClass('fa-moon');
	} else {
		$(':root').attr('data-theme', 'dark');
		$('#themeBtn').addClass('fa-sun');
	}
}

$(document).ready(function () {
	// get & set theme
	getAndSetTheme();
});
