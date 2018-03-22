$(document).ready(function(){

$.ajax({
	url: "https://api.github.com/users/JoshSeyda" , 
	type: "GET" , 
	success: function(data){
		let myName = ;
		let myPic = ;
		let myRepos = ;
		let myFollowers = ;


	},
	error: function(error){
		console.log(error);
	}
})

$.ajax({
	url: "https://api.github.com/users/JoshSeyda/followers" , 
	type: "GET" , 
	success: function(data){
		let myFollower = ;
		
	},
	error: function(error){
		console.log(error);
	}
})