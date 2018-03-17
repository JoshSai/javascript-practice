function talk(){
	console.log(this.sound);
}
let animal = {
	talk: talk;
}
let dog = {
	sound: 'woof!';
}
let prarieDog = {
	howl: function(){
	console.log(this.sound.toUpperCase());
	}
}
Object.setPrototypeOf(dog, animal)
animal.talk = function(){
	console.log()
}





function Bear(type){
	this.type = type;
}
Bear.prototype.growl = function(){
	console.log('The 'this.type + " bear says grrr");
}

	function Grizzly(){
		Bear.call(this, 'grizzly'); //<--===<<< Parent.call()
}
Grizzly.prototype = Object.create(Bear.prototype);//<|---=====<<<~~~~ Child.prototype = Object.create(Parent.prototype)
//had we done Grizzly.prototype = Bear.prototype this would just be setting it equal to each other..
var grizzly = new Grizzly();
var polar = new Bear('polar');

grizzly.growl = function(){console.log('override')}


