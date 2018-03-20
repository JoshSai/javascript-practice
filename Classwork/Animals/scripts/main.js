//$( "li.item-ii" ).find( "li" ).css( "background-color", "red" );

$('p:nth-child(2)').replaceWith("<p>Animals Are Great!</p>").addClass('.subhead');
$('#logo').click(function(){$(this).css('background-image' , 'url(img/logos/puppy.png)')});
let x = $('p:nth-child(2)').append("<div></div>");
let cuteC = $('<div></div>').addClass('.cuteContainer');
for(i=6; i > 0; i--){
	let cute = $('<div></div>').addClass('cute');
	cuteC.append(cute);
}
$('p:nth-child(2)').append(cuteC);

let arrHex = ["#481b1a","#874438","#ac7c83","#dfa981","#e6030c"];
let randColor = arrHex[Math.floor(Math.random()*arrHex.length)];
$('#pic-strip').hover(function(){$(this).css('background-color', randColor)});