$(document).ready(function(){
	$('.hidden').hide();

	$('#about-me.menu-entry').click(function(){
		console.log('about me clicked');
		$('div#main-menu.page-content').hide();
		$('div#about-me.page-content').show();
	});
});