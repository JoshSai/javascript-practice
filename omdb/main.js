$('form').submit(function(e){
	e.preventDefault();
	let name = $('#t').val();
	let year = $('#y').val();
	let nameYear = [name , year]
	console.log(nameYear);
	let urlConcat = `http://www.omdbapi.com/?t=${name}&y=${year}&apikey=fe1fb6fa`;
	
	$.ajax({
	url: urlConcat, 
	type: "GET" , 
		success: function(data){
		console.log(data);
		let postImg = `<img src="${data.Poster}">`,
			dateRel = `<h3>${data.Released}</h3>`,
			cast = `<p>${data.Actors}</P>`,
			story = `<p>${data.Plot}</p>`,
			brains = `<h4>${data.Director}</h4>`,
			rating = `<h5>${data.imdbRating}</h5>`,
			timeLine = `<h5>${data.Runtime}</h5>`;

$('form').append(postImg).append(dateRel).append(cast).append(story).append(brains).append(rating).append(timeLine);
		} ,
			error: function(error){
			console.log(error);
		
	}})
});



