1 - FizzBuzz 
Write a program that console.logs the numbers from 1 to 100. But for multiples of three print “Fizz” instead of the number and for the multiples of five console.log “Buzz”. For numbers which are multiples of both three and five console.log “FizzBuzz”.

2 - Pig Latin
Pig Latin is a game of alterations played on the English language. To create the Pig Latin form of an English word the initial consonant sound is transposed to the end of the word and an ay is affixed (Ex.: "banana" would yield anana-bay). Check out Wikipedia for more information on rules - try to get as close as possible. 
Compose a javascript function that takes in a regular sentence or paragraph and returns the Pig Latin equivalent. 

3 - Palindrome
Write a JavaScript function that takes in a string and checks if it is a palindrome.


function fizzBuzzer(){
	for(let i = 1; i < 100; i++){
		if(i%3===0 && i%5===0){
			console.log("FizzBuzz");
		}else if(i%3===0){
			console.log("“Fizz”");
		}else if(i%5===0){
			console.log("“Buzz”");
		}else{
			console.log(i);
		}
	}
}


function igpayAtinlay(ordway){
	let ord = ordway.toLowerCase();
	let vowel = ['a', 'e', 'i', 'o', 'u']
	let consonant = ['b', 'c', 'd', 'f', 'g', 'h', 'j', 'k', 'l', 'm', 'n', 'p', 'q', 'r', 's', 't', 'v', 'w', 'x', 'y', 'z']
	for (var i = 0; i < ord.length-1; i++) {
		if($.inArray(ord[0], vowel) != -1){
			return `${ord}ay`;
		}else if($.inArray(ord[0], consonant) != -1 && $.inArray(ord[1], consonant) != -1){
			return `${ord.slice(2)}`
		}else if($.inArray(ord[0], consonant) != -1){
			console.log();
		}else{
			console.log("Something went wrong...")
		}
	}
	
}


For words that begin with consonant sounds, all letters before the initial vowel are placed at the end of the word sequence. Then, "ay" is added, as in the following examples:[11]

"pig" = "igpay"
"latin" = "atinlay"
"banana" = "ananabay"
"trash" = "ashtray"
"happy" = "appyhay"
"duck" = "uckday"
"dopest" = "opestday"
"me" = "emay"
"too" = "ootay"
"will" = "illway"
"moist" = "oistmay"
"wet" = "etway"
"real" = "ealray"
"simple" = "implesay"
"say" = "aysay"
"bagel" = "agelbay"
When words begin with consonant clusters (multiple consonants that form one sound), the whole sound is added to the end when speaking or writing.[12]

"cheers" = "eerschay"
"shesh" = "eshshay"
"smile" = "ilesmay"
"string" = "ingstray"
"thanks" = "anksthay"
"stupid" = "upidstay"
"glove" = "oveglay"
For words that begin with vowel sounds, one just adds "way" or "yay" to the end (or just "ay"). Examples are:

"eat" = "eatway" or "eatay"
"omelet" = "omeletway" or "omeletay"
"are" = "areway" or "areay"
"egg" = "eggway" or "eggay"
"explain" = "explainway"
"always" = "alwaysway" or "alwaysay"
"ends" = "endsway" or "endsay"
An alternative convention for words beginning with vowel sounds, one removes the initial vowel(s) along with the first consonant or consonant cluster. This usually only works for words with more than one syllable and offers a more unique variant of the words in keeping with the mysterious, unrecognizable sounds of the converted words. Examples are:

"every" = "eryevay"
"omelet" = "eletomay"
"another" = "otheranay"
"under" = "erunday"
"island" = "andislay"
"elegant" = "egantelay"