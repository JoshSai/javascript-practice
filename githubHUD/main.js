$(document).ready(function(){

$.ajax({
	url: "https://api.github.com/users/JoshSeyda" , 
	type: "GET" , 
	success: function(data){
		let myName = `<h3>${data.name}</h3>`,
			myPic = `<img src="${data.avatar_url}">`,
			myRepos = `<h4>I have ${data.public_repos} Public Repositories</h4>` ,
			myFollowers = `<h4>I have ${data.followers} Followers</h4>`;
			$('#ghLink').append(myName).append(myPic).append(myRepos).append(myFollowers);
	},
	error: function(error){
		console.log(error);
	}
})

$.ajax({
	url: "https://api.github.com/users/JoshSeyda/followers" , 
	type: "GET" , 
	success: function(data){
		$('#ghLink').append(`<p>My Followers</p>`);
		for (var i = 0; i < data.length; i++) {
			let userName = data[i].login;
			let profPic = data[i].avatar_url;
			let icon = $(`<div class="follower"></div>`).append(userName);
			let imgToken = $(`<img>`).attr('src', profPic);
			$('#ghLink').append(icon).append(imgToken);
			
		}
	},
	error: function(error){
		console.log(error);
		
	}})
});
