$(document).ready(function(){

	$('.box').css('background-color', 'blue')
			.html('box')

	$('#uno').click(function(){
		$('#uno').css('height', '500px').css('width', '500px')
	});

	$('#dos').click(function(){
		$('#dos').css('height', '500px').css('width', '500px').css('background-color', 'teal')
	});

});

