var faster = 150;
var ids = ['about-me', 'my-projects', 'work-experience', 'interests', 'contact'];
var in_menu = true;

function clicker (id){
	return function(){
		console.log(id + ' clicked');
		$('.page-content').animate({ height: 'hide', opacity: 'hide' }, faster);//.hide();
		$(id +'.page-content').animate({ height: 'show', opacity: 'show' }, 'fast');//.show();

		in_menu = false;
	}
};

function go_back (){
	if (!in_menu){
		$('.page-content').animate({ height: 'hide', opacity: 'hide' }, faster);//.hide();
		$('#main-menu.page-content').animate({ height: 'show', opacity: 'show' }, 'fast');//.show();
		in_menu = true;
	}
};

$(document).ready(function(){
	in_menu = true;

	var tokens = $(location).attr('href').split("#");
	var index = $.inArray(tokens.slice(-1)[0], ids);
	if(  index != -1 ){
		$('#'+ids[index]+'.page-content').removeClass('hidden');
		$('#main-menu.page-content').addClass('hidden');

		in_menu = false;
	}

	$('.hidden').hide();


	ids.map(function(item){
		$('#'+item+'.menu-entry').click(clicker('#'+item));
	});

	ids.map(function(item){
		$('#'+item+'.page-content .content-text').load("content/"+item+".html");
	});
	

	$('.back').click(go_back);

	$("body").keydown(function(e) {
	  if(e.keyCode == 27) { // esc
	    go_back();
	    window.location = $('.back a').attr('href');
	  }
	});	
});