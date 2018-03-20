// Given the following URL : https://api.myjson.com/bins containing a JSON object about your favorite GOT character. 
// Create a AJAX call for that url to grab the JSON data and log the result in your console.
// Loop through the aliases array and console log out the results
// Return the value of 'actor' in the 'playedBy' object.
// Append the name of the actor to the dom to a p element with the id of "my-actor"

console.log('connected');

$(document).ready(function(){

	$.ajax({
	url: "https://api.myjson.com/bins/bygvt" , 
	type: 'GET' , 
	success: function(data){
		console.log(data);
		let actor = data.playedBy.actor;
		let kitH = $('body').append(`<p>${actor}</p>`);
		kitH.attr('id', 'my-actor');
		loopThroughAlias(data.aliases);
	},
	error: function(error){
		console.log(error);
	}
})
})

function loopThroughAlias(arr){
	for (var i = 0; i < arr.length; i++) {
		console.log(arr[i]);
		$('#my-actor').append(`<p>also known as ${arr[i]}...`);
	}
}