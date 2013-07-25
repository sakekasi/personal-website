var faster = 150;

function clicker (id){
	return function(){
		console.log(id + ' clicked');
		$('.page-content').animate({ height: 'hide', opacity: 'hide' }, faster);//.hide();
		$(id +'.page-content').animate({ height: 'show', opacity: 'show' }, 'fast');//.show();
	}
};

$(document).ready(function(){
	var ids = ['about-me', 'my-projects', 'work-experience', 'interests', 'contact'];

	var tokens = $(location).attr('href').split("#");
	var index = $.inArray(tokens.slice(-1)[0], ids);
	if(  index != -1 ){
		$('#'+ids[index]+'.page-content').removeClass('hidden');
		$('#main-menu.page-content').addClass('hidden');
	}

	$('.hidden').hide();
	

	ids.map(function(item){
		$('#'+item+'.menu-entry').click(clicker('#'+item));
	});

	ids.map(function(item){
		$('#'+item+'.page-content .content-text').load("content/"+item+".html");
	});

	

	$('.back').click(function(){
		$('.page-content').animate({ height: 'hide', opacity: 'hide' }, faster);//.hide();
		$('#main-menu.page-content').animate({ height: 'show', opacity: 'show' }, 'fast');//.show();
	});
});


