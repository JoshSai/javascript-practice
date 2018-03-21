$.ajax({
	url: "https://www.redbullshopus.com/products.json" , 
	type: 'GET' , 
	success: function(products){
		for (let i = 0; i < products.length; i++) {
			let properName = products[i].title;
			console.log(properName);
			let mainInfo = products[i].body;
			console.log(mainInfo);
			let refTags = products[i].tags;
			console.log(refTags);
			let photoFile = products[i].variants[0].featured_image.src;
			console.log(photoFile);
		}
	},
	error: function(error){
		console.log(error);
	}
})
}