var faster = 150;
var immediate = 50;
var ids = ['about-me', 'my-projects', 'work-experience', 'interests'];
var in_menu = true;

function clicker(id) {
	return function() {
		console.log(id + ' clicked');
		$('.page-content').slideUp(immediate);
		$('#' + id + '.page-content').slideDown('fast');
		//$('.page-content').animate({ height: 'hide', opacity: 'hide' }, faster);//.hide();
		//$('#' + id + '.page-content').animate({ height: 'show', opacity: 'show' }, 'fast');//.show();

		in_menu = false;
	};
}

function load_callback(id) {
	switch(id) {
	case 'about-me':
		return function() {
			$('#contact-link').click(clicker('#contact'));
		};
	default:
		return function() {};
	}
}

function go_back() {
	if (!in_menu) {
		$('.page-content').slideUp(immediate);
		$('#main-menu.page-content').slideDown('fast');
		//$('.page-content').animate({ height: 'hide', opacity: 'hide' }, faster);//.hide();
		//$('#main-menu.page-content').animate({ height: 'show', opacity: 'show' }, 'fast');//.show();
		in_menu = true;
	}
}

$(document).ready(function() {
	in_menu = true;

	var tokens = $(location).attr('href').split('#'),
        index = $.inArray(tokens.slice(-1)[0], ids);
	if (index !== -1) {
		$('#'+ids[index]+'.page-content').removeClass('_hide');
		$('#main-menu.page-content').addClass('_hide');

		in_menu = false;
	}

	$('._hide').hide();

	ids.map(function(item){
		$('#'+item+'.page-content .content-text').load('content/'+item+'.html', load_callback(item));
	});

	ids.map(function(item){
		$('#'+item+'.menu-entry').click(clicker(item));
	});
	

	$('.back').click(go_back);

	$('body').keydown(function(e) {
	  if(e.keyCode == 27) { // esc
	    go_back();
	    window.location = $('.back a').attr('href');
	  }
	});	


});