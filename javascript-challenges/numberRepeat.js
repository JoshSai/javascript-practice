// given an array of integers
// write a function that removes all duplicates from the array
let arr = [1,3,5,3,7,1];
// function removeD(arr){
//   // return [ 1, 5, 3, 7];
// 

function removeD(arr){
let repCount = {};
let used = [];
for(let i = 0; i < arr.length; i++){
    let newNum = arr[i];
    let counter = 0;
      for(let j = 0; j < arr.length; j++){
         if (arr[j] === arr[i]){counter++;} 
        repCount[newNum] = counter;
      }
          if(counter == 1){
            used.push(newNum);
          }else if (counter > 1 && used.indexOf(arr[i])==-1){
            used.push(newNum);
          }else{
             //love yourself
      }
}
console.log(used);
}
removeD(arr);
