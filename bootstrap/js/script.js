var content_height = '350px';
var collapsed_height = '0px';

function clicker (id){
	return function(){
		console.log(id + ' clicked');
		$('.page-content').animate({ height: 'hide', opacity: 'hide' }, 'fast');//.hide();
		$(id +'.page-content').animate({ height: 'show', opacity: 'show' }, 'fast');//.show();
		$('.content-text').animate({
		 		height: content_height
		 	}, 500, function(){});
	}
};

$(document).ready(function(){
	$('.hidden').hide();

	var ids = ['about-me', 'my-projects', 'work-experience', 'interests', 'contact'];

	ids.map(function(item){
		$('#'+item+'.menu-entry').click(clicker('#'+item));
	});

	ids.map(function(item){
		$('#'+item+'.page-content .content-text').load("content/"+item+".html");
	});

	$('.back').click(function(){
		console.log('back clicked');
		$('.content-text').animate({
		 		height: collapsed_height
		 	}, 500, function(){});
		setTimeout(function(){
			$('.page-content').animate({ height: 'hide', opacity: 'hide' }, 'fast');//.hide();
			$('#main-menu.page-content').animate({ height: 'show', opacity: 'show' }, 'fast');//.show();
		}, 500);
	});
});


