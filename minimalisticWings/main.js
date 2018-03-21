console.log('linked');

$(document).ready(function(){

$.ajax({
	url: "https://www.redbullshopus.com/products.json" , 
	type: "GET" , 
	success: function(data){
		$('#landing').append(`<section></section>`).attr('id', "container");
		loopThrough(data.products);
	},
	error: function(error){
		console.log(error);
	}
})

})

function loopThrough(obj){
	for (var i = 0; i < obj.length; i++) {
		// console.log(obj[i]);
		let properName = obj[i].title;
		let photoFile = obj[i].images[0].src;
		let mainInfo = obj[i].body_html;
			$('#container').append(`<div><h3>${properName}</h3></div>`).append(`<img src="${photoFile}">`).append(mainInfo);
		// let nameBlock = $('div').attr('id', i);
		
			
		console.log(photoFile);
		

		console.log(mainInfo);
		let refTags = obj[i].tags;

		console.log(refTags);

		// $('#my-actor').append(`<p>also known as ${obj[i]}...</p>`);
	}
}


// let kitH = $('body').append(`<p>${actor}</p>`);
// 		kitH.attr('id', 'my-actor');

// function loopThrough(obj){
// 	for (var i = 0; i < obj.length; i++) {
// 		console.log(obj[i]);
// 		let properName = obj[i].title;
// 			$('body').append(`<div><h3>${properName}</h3></div>`).addClass('${properName}');
// 		console.log(properName);
// 		let photoFile = obj[i].variants[0].featured_image.src;
// 			$('.properName').append(photoFile);
// 		console.log(photoFile);
// 		let mainInfo = obj[i].body_html;
			
// 		console.log(mainInfo);
// 		let refTags = obj[i].tags;

// 		console.log(refTags);
		
// 		// $('#my-actor').append(`<p>also known as ${obj[i]}...</p>`);
// 	}
// }