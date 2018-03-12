console.log('Hello World!');

//var let and const

var x = 0; // older declaration
let y = 1; // new declaration
const z = 99; //does not change throughout

//prioritize using let over var. 86 var

//number
let myAge = 27;
//string
let myName = 'Josh';
//boolean
let myBoolean = true;
let myBoolean2 = false;
//array
let myArray = [0,'silver', 5, 'cyan', false];
//2d array
let my2dArray = [[1,1,2], [3,5,8], [13,21,35]];
console.log(my2dArray[1][2]); //logs 8
//3d array
let my3dArray = [1,[[2],[3, 9]],[5, 8]];
//hash aka object. (key-value pairs)
let myHash = {
	key: 'value',
	keyTwo: false,
	keyThree: 5
};
//access hash with either dot or bracket notation
console.log(myHash['keyTwo']);//logs false

// ++ += -- -= *= /= arithmetic operators
//modulus! gives remainder of a division operation
//conditional statements

/*if(condition){
	//do this
} else if (alternate condition) {
	//or do this
}
else {
	//do this instead
};*/
//comparison operators == (nonstrict) ===(strict)
//== only compares value, === compares value and datatype

//other operators != (not equal) !== (strict)
//> < <= >= etc && and || or 
//for loops
//for (where we start; where we are going; how do we get there){}

for(let x = 0; x <= 10; x++){
	console.log(x);
}

//while loop 
//while (i< 10){console.log("The number is "+ i); i++}

// while(i < n){
// 	console.log(i);
// 	i++;
// }


// do {
// 	//some stuff;
// } while (7 < n);


// array.forEach(function(element)) iterate array

// for (var property1 in object1){
// 	do stuff;
// }
//iterates on a hash/object

//tertiary operator
//variable ? ifTrue : ifFalse
//condition ? trueExpression: falseExpression;
//^quick way to do something like an if/else^

//DAY TWO JS PARTY MOFOZZZZ
//function syntax ES5 and below declaration
function funcName(params){
	return params + 2;
}

function funName(param1, param2, param3){
	//do something obscure...
}

//ES6 badboi declaration
let funcNameNew = (params) => { return params + 2; }

//dont forget return is the last thing to put into your function

//     *\m/invocation\m/*
funcName(2);
funcNameNew(2);

// soon make functions inside functions inside functions..think of a sub-ecosystem type structure...

//immediate invocation ES5
(function (){console.log('hello');})();

//immediate invoction ES6
(()=>{console.log('ok');})();

// ^^^'anonymous' function is assigned to a variable^^^
// named function, obfuscates the function behind a variable placement...aids in keeping your code a lair of security. kind of like an alias?
var someOtherFunctionName = function accio(name){
	console.log(name + ' Potter!');
}

someOtherFunctionName('Harry')//<-----how to invoke the new named function

// ^^^most likely best practice but IE8 is not fully integrated^^^ fuck 'em


// 'hoisting' concept you can call a function before its defined because the function can be 'hoisted' to the top
//to avoid hoisting, you can use an anon function such as...
whoIsTheBoyWhoLived('Harry');//not yet definted
var whoIsTheBoyWhoLived = function(name){
	console.log(name + ' Potter!');
}

// var gets hoisted, but not the value associated it. let was created to avoid this
//scope partay..blockLevel/Local && globalLevel

var x = 100;
fucntion sayName(name){
	console.log(name);
	console.log(x);
}

//var is global scope, it can be accessed anywhere in your program 
//block-level/local is scoped to the block of code that its in, or whatever structure its a part of
// ^^aka function-scope ^^

// var or let inside an if statement
//var will be scoped to the containing block of the if statement
//let will be scoped to the conditional

//closure in the case of a (variable inside of a function) inside of another function.....
// #obfuscation 

fucntion(){
	var y = 1;
	//can not do console.log(x);
	function(){
		var x = 5;
	//can do console.log(y);
	}
}
//this works but the counter is globally available for manipulation and that creates room for errors/problems
var counter = 0;

function add() {
    counter += 1;
}

add();
add();
add();

// the counter is now equal to 3

//solution is a closure function or 'nested' function
function add() {
    var counter = 0;
    function plus() {counter += 1;}
    plus();    
    return counter; 
}

//switch statements!!

function calculator(operator, num0ne, numTwo){
	switch(operator){
		case "add":
		return num0ne + numTwo;
		break;
		case "Add":
		return num0ne + numTwo;
		break;
		case "+":
		return num0ne + numTwo;
		break;
		case "subtract":
		return num0ne - numTwo;
		break;
		case "Subtract":
		return num0ne - numTwo;
		break;
		case "-":
		return num0ne - numTwo;
		break;
		case "divide":
		return num0ne / numTwo;
		break;
		case "Divide":
		return num0ne / numTwo;
		break;
		case "/":
		return num0ne / numTwo;
		break;
		case "multiply":
		return num0ne * numTwo;
		break;
		case "Multiply":
		return num0ne * numTwo;
		break;
		case "*":
		return num0ne * numTwo;
		break;
		case "x":
		return num0ne * numTwo;
		break;
		case "X":
		return num0ne * numTwo;
		break;
		default:
		alert("enter valid operation: add, subtract, multiply or divide");
		break;
	}
}


//debugger // call stack is last in first out

for(i=0;i<100;i++){
	console.log(i);
	debugger;
}

