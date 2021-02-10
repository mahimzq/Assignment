
$('input').keyup(function(){
let word=$('input').val();
if(word== ''){
$('h1').text('Fill up')
} else if(word.length>=0 && word.length<=5){
$('h1').text('text must be 6 letter');
} else if(word.length>=6 && word.length<=10){
	$('h1').text('pefrect username');
} else if(word.length>=10){
	$('h1').text('stop! dont write anything');
} else{
	$('h1').text('');
}
});



let cls;
let num=10;
$('button#start').click(function(){
 cls= setInterval(function(){
$('h2').text(num);
num--;
if(num<=0){
	num=10;
}
},1000);
});
$('button#stop').click(function(){
clearInterval(cls);
num=10;
});