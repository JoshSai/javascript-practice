// Javascript Functions & Scope


// Function with no arguments
// Declare a function called bestTeacher that takes no arguments and logs to the console “{Your Teacher} is the best teacher in the world” to the console. ;)
function bestTeacher(){
	console.log('{Your Teacher} is the best teacher in the world');
}
//ES6
let bestTeacher = () =>{console.log('{Your Teacher} is the best teacher in the world');}

// Function with one argument
// NYCDA needs a simple welcome program for registered students. 
// Create a function called nycdaWelcome that will take in a student's name as a function argument and console log a string that looks like : “Welcome to NYCDA {Students Name}. Enjoy your stay” 
function nycdaWelcome(studentName){
	console.log(`Welcome to NYCDA ${studentName}. Enjoy your stay`);
}
//ES6
let nycdaWelcome = (studentName) => {console.log(`Welcome to NYCDA ${studentName}. Enjoy your stay`);}

// Function with multiple arguments 
// Create a simple calculator function called simpleCalc that given two arguments will perform addition and return the result.
function simpleCalc(arg1, arg2) {
	return arg1 += arg2;
}
//ES6
let simpleCalc = (arg1, arg2) => {return arg1 += arg2;}

// Function with arguments and logic
// Declare a function called magicDoor that receives an input of 1, 2 or 3.
//Depending upon which virtual "door" was entered create logic that will tell 
//user they've received a different "prize" in an alert based on their selection
// Door 1 will give the user a brand new car
// Door 2 will give the user a nycda t-shirt
// Door 3 will turn into a blackhole and teleport you to antarctica

function magicDoor(number){
	if (number == 1){alert("You won a brand new car!");}
	else if(number == 2){alert("You won a nycda t-shirt!");}
	else if(number == 3){alert("You have been teleported you to antarctica!");}
	else{alert("You did't win anything! try again");}
}

//ES6
let magicDoor = (number) => {if (number === 1){alert("You won a brand new car!");}
	else if(number === 2){alert("You won a nycda t-shirt!");}
	else if(number === 3){alert("You have been teleported you to antarctica!");}
	else{alert("You did't win anything! try again");}}


// Function that modifies input  
// Define a function greaterOfThree that takes three integers and returns the larger of the three.
function greaterOfThree(int1, int2, int3) {
	if(int1 > int2 && int1 > int3){return int1}
		else if (int1 < int2 && int2 > int3){return int2}
			else if(int3 > int2 && int1 < int3){return int3}
				else{console.log("No repeating numbers!!!!!")}
}

//ES6
let greaterOfThree = (int1, int2, int3) => {if(int1 > int2 && int1 > int3){return int1}
		else if (int1 < int2 && int2 > int3){return int2}
			else if(int3 > int2 && int1 < int3){return int3}
				else{console.log("No repeating numbers!!!!!");}};
}

// Function that modifies input 
// Define a function lineThemUp that takes three integers as arguments and returns the integers as an array.
function lineThemUp(int1, int2, int3){
	let newArr = [int1, int2, int3];
	return newArr;
}

//ES6
let lineThemUp = (int1, int2, int3) => {let newArr = [int1, int2, int3]; return newArr;}

// Function that modifies input
// Define a function called knighter that takes a name and returns it after being knighted.
// ex : Knighter(“Andy”) returns “Royal Knight Sir Andy”
function knighter(name){
	return "Royal Knight Sir "+ name;
}

//ES6
let knighter = (name) => {return "Royal Knight Sir "+ name;}

// Function with Logic 
// Define a function called royalizer that takes a gender and name as arguments, and returns a title based on the gender. 
// ex : royalizer(“male”, “David”) returns “His Majesty David” , for female it would be “Her Majesty X”.
function royalizer(name, gender) {
	if (gender == 'female'){
		return "Her Majesty " + name;
	}else if (gender == 'male'){
		return "His Majesty " + name;
	}else{
		return "Their Majesty " + name;
	}
}

//ES6
let royalizer = (name, gender) => {if (gender == 'female'){return "Her Majesty " + name;}
		else if (gender == 'male'){return "His Majesty " + name;}
			else{return "Their Majesty " + name;}};


