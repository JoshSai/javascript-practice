$(document).ready(function(){

$.ajax({
	url: "https://api.github.com/users/JoshSeyda" , 
	type: "GET" , 
	success: function(data){
		let myName = `<h3 id="myName">${data.name}</h3>`,
			myPic = `<img id="myPic" src="${data.avatar_url}">`,
			myRepos = `<h4 id="myRepos">I have ${data.public_repos} Public Repositories</h4>` ,
			myFollowers = `<h4 id="myFollowers">and ${data.followers} Followers</h4>`;
			$('#personal').append(myName).append(myPic).append(myRepos).append(myFollowers);
			repoFunction();
			followerFunct();


	},
	error: function(error){
		console.log(error);
	}
})
const followerFunct = function(){
$.ajax({
	url: "https://api.github.com/users/JoshSeyda/followers" , 
	type: "GET" , 
	success: function(data){
		$('#ghLink').append(`<h4 id="myF">My Followers</h4>`);
		for (var i = 0; i < data.length; i++) {
			let userName = data[i].login;
			let profPic = data[i].avatar_url;
			let icon = $(`<div class="follower"></div>`).append(`<h4>${userName}</h4>`);
			let imgToken = $(`<img class="folPic">`).attr('src', profPic);
			let friends = $(icon).append(imgToken);
			$('#ghLink').append(friends);
			
		}
	},
	error: function(error){
		console.log(error);
		
	}})}

const repoFunction = function(){
$.ajax({
	url: "https://api.github.com/users/JoshSeyda/repos" , 
	type: "GET" , 
	success: function(data){
		for (var i = 0; i < data.length; i++) {
		let repoUrl = data[i].html_url
		let repoName = data[i].name;
		$('#myRepos').append(`<br><a class="repoLink" href="${repoUrl}">${repoName}</a>`);
	}
}})
}});

