// 1 - Calculator Function
// Make a function that takes in a word, and two numbers. The supported words would be “add”, “subtract”, “multiply” & “divide”. This function should perform the appropriate calculator action on the numbers and return the answer. Your calculator function should work for all of the following examples. 

// var answer = calculator("add", 4, 2)
// console.log(answer) // 6
// answer = calculator("subtract", 4, 2)
// console.log(answer) // 2
// answer = calculator("divide", 4, 2)
// console.log(answer) // 2
// answer = calculator("multiply", 4, 2)
// console.log(answer) // 8

function calculator(methodType, num1, num2){
  if(methodType == "add" ||methodType =="+"){
    return num1 + num2;
  }
    else if(methodType == "subtract" || methodType == "-"){
       return num1 - num2;
    }
      else if(methodType == "divide" || methodType == "/"){
         return num1 / num2;
      }
        else if(methodType == "multiply" ||methodType ==  "*" || methodType == "x"||methodType == "X"){
           return num1 * num2;
        }
          else{
            console.log("Only input basic arithmetic paired with two numbers please!");
          }
}

2 - Kardashian Quiz
Let’s build a simple quiz program, this is the perfect use of a function to take care of the repetitive task of reading from a collection of questions. First off you should build a function that takes in a question and an answer then returns 1 or 0 depending on if the person got it right. 
You can make use of the prompt  function in JavaScript to get user input. Here’s some starter code:

function ask(question, answer){
  let counter = 0;
  if(question ==="Was Kim born in 1985?"){
      if(answer==="yes"){
          counter++;
          return 1;
      }else{
          return 0;
      }
  }
    else if (question ==="Will Rob get out of jail?"){
      if(answer==="no"){
          counter++;
          return 1;
      }else{
          return 0;
      }
    }
      else if (question ==="Does North seem happy?"){
        if(answer==="no"){
          counter++;
          return 1;
      }else{
          return 0;
      }
      }
        else if (question === "Kanye released 'Heartless' in 2008?"){
          if(answer==="yes"){
          counter++;
          return 1;
      }else{
          return 0;
      }
        }
          else{
            return null;
          }
    console.log(counter);
}

var point = ask("Is Kim the best?", "true")

console.log(point)


var questions = [
  "Was Kim born in 1985?",
  "Will Rob get out of jail?",
  "Does North seem happy?",
  "Kanye released 'Heartless' in 2008?"
  ]
  
var answers = [
  "yes",
  "no",
  "no",
  "yes"
  ]
  
//you code here 
function ask(quesIndx){
  let ansIndx = answers[i];
  let counter = 0;
  for(i=0; i > questions.length; i++){
    var ans = confirm(questions[i]\nEither 'yes' or 'no');
      if(ans === answers[i]){
        counter++;
      }else{
        alert("Wrong!");
      }
  }
}



After making your function: 
create an array of questions, and an array of answers
use a loop and those arrays to ask the user questions. 
keep a running total of the user’s score.
console.log the user’s score after the loop.

Bonus:
If you got through The Kardashian quiz with your sanity, try to make your quiz more complex. Maybe make a version that tells you which Kardashian you are. 
Completion Requirements
Complete Workshop by end of allotted time limit.
The calculator function works for addition, subtraction, division, and multiplication.
The quiz program accurately keeps track of a running total of points for the user. 
Group review session with the instructor. 

if (confirm('Are you sure you want to save this thing into the database?')) {
    // Save it!
} else {
    // Do nothing!
}





