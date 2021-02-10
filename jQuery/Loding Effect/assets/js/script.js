



$('button').click(function(){
	let name = $('input').val();
	$('img').show();
	let off = setInterval(function(){	
		$('img').hide();	
		$('h1').text(name);
		$('input').val('');

		clearInterval(off);
	}, 3000);
	
});