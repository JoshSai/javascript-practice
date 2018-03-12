function igpayAtinlay(ordway){
	let ord = ordway.toLowerCase();
	let vowelList = ['a', 'e', 'i', 'o', 'u']; 
	let consonantList = ['b', 'c', 'd', 'f', 'g', 'h', 'j', 'k', 'l', 'm', 'n', 'p', 'q', 'r', 's', 't', 'v', 'w', 'x', 'y', 'z'];

		if(vowelList.indexOf(ord[0]) != -1){
		  console.log(`${ord}ay`);
		}else if(consonantList.indexOf(ord[0])!= -1 && consonantList.indexOf(ord[1]) != -1  && consonantList.indexOf(ord[2]) != -1){
		  let word = ord.slice(3)+ord.slice(0,3);
		  console.log(word+"ay");
		}else if(consonantList.indexOf(ord[0])!= -1 && consonantList.indexOf(ord[1]) != -1){
		  let word = ord.slice(2)+ord.slice(0,2);
		  console.log(word+"ay");
		}else if(consonantList.indexOf(ord[0])!= -1){
		  let word = ord.slice(1)+ord.slice(0,1);
			console.log(word+"ay");
		}else{
			console.log("Something went wrong...");
		}
}