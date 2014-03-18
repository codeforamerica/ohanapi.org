$(document).ready(function(){
	var root = $('html, body');
	$('a').click(function(){
		var href = $(this).attr('href');
    	root.animate({
    	    scrollTop: $( href ).offset().top
    	}, 500);
    return false;
	});
});