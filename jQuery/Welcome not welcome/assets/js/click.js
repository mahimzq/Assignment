$('a').click(function(){
    $('a').css('background-color','#ccc') .css ('transform','scale(1)') ;
    $(this).css('background-color','red') .css('transform', 'scale(1.3');
});	

$('button').click(function () {
    $('a').slideToggle(1000);
    
});