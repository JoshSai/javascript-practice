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
		let refTags = obj[i].tags;
		$('#container').append(`<div class="title"><h3>${properName}</h3><button class="collapsible"><img class="productPic" src="${photoFile}"></button><div class="content"><div>${mainInfo}</div><section id="productTag">${refTags}</section></div></div>`);
		console.log(refTags);
	}
}

let collapse = $(".collapsible");
for (let i = 0; i < collapse.length; i++) {
    collapse[i].addEventListener("click", function() {
        this.classList.toggle("active");
        let content = this.nextElementSibling;
        if (content.style.display === "block") {
            content.style.display = "none";
        } else {
            content.style.display = "block";
        }
    });
}


