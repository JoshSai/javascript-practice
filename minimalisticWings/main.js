console.log('linked');

$(document).ready(function(){

$.ajax({
	url: "https://www.redbullshopus.com/products.json" , 
	type: "GET" , 
	success: function(data){
		$('#landing').append(`<section id="container"></section>`);
		loopThrough(data.products);
	},
	error: function(error){
		console.log(error);
	}
})

})

function loopThrough(obj){
	for (var i = 0; i < obj.length; i++) {
		let properName = obj[i].title;
		let photoFile = obj[i].images[0].src;
		let mainInfo = obj[i].body_html;
			$('#container').append(`<div class="title"><h3>${properName}</h3><img class="productPic" src="${photoFile}"><div class="htmlAbout">${mainInfo}</div></div>`);
		let refTags = obj[i].tags;
		console.log(refTags);
	}
}
