
window.addEventListener('scroll', function(){
	let hidden1 = document.getElementsByClassName("hidden1"),
	document.getElementsByClassName("hidden2"),
	document.getElementsByClassName("hidden3");

		 if (window.pageYOffset % 800 == 0) {
   	 		hidden1.className += 'show';
   	 		console.log(hidden1);
		} else if (window.pageYOffset % 1600 == 0){
   	 		hidden2.className += 'show';
   	 		console.log(hidden2);
		}else if (window.pageYOffset % 2400 == 0){
   	 		hidden3.className += 'show';
   	 		console.log(hidden3);
		}
});

