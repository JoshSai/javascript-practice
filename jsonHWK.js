console.log('connected');
$(document).ready({
	$.ajax({
	url: "https://api.myjson.com/bins/bygvt" , 
	success: function(data){
		console.log(data);
		loopThroughAlias(data.aliases);
		let actor = data.playedBy.actor;
		$('body').append(`<p>${actor}</p>`);
	},
	error: function(error){
		console.log(error);
	}
})
}

function loopThroughAlias(arr){
	for (var i = 0; i < aliases.length; i++) {
		console.log(aliases[i]);
	}
}