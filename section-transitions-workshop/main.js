window.addEventListener('scroll', function(){
	let hidden1 = document.getElementsByClassName("hidden1");
	let hidden2 = document.getElementsByClassName("hidden2"); 
	let hidden3 = document.getElementsByClassName("hidden3");

		 if (window.pageYOffset > 1054 && window.pageYOffset < 1858) {
   	 		hidden1.className += "show";
   	 		//console.log(hidden1);
		} else if (window.pageYOffset > 1858 && window.pageYOffset < 2658){
   	 		hidden2.className += "show";
   	 		//console.log(hidden2);
		}else if (window.pageYOffset > 2658){
   	 		hidden3.className += "show";
   	 		//console.log(hidden3);
		} else {
			//console.log(document.getElementsByClassName('show'));
		}
});

