function primeTest(number){
  
let primeArr = [2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37, 41, 43, 47, 53, 59, 61, 67, 71, 73, 79, 83, 89, 97, 101, 103, 107, 109, 113, 127, 131, 137, 139, 149, 151, 157, 163, 167, 173, 179, 181, 191, 193, 197, 199];

for (let i = 0; i < primeArr.length ;i++){
// evaluate if given number divides evenly with any numbers in array..
  if(number%primeArr[i] === 0){
    console.log(`${number} is not prime!`);
    return false;
//evaluate if current number in the array is more than half the value given
  }else if (primeArr[i] > number/2){
    console.log(`${number} is prime`);
    return true;
//stopgap to ensure code is running up to this point
  }else{
    continue;
  }
}
for(i = 201; i <= (number/2) ; i+=2){
//evaluate if the next odd number divides evenly
  if(number%i=== 0 ){
    console.log(`${number} is not divisible by ${i}`);
    return false;
//evaluates if number being tested is more than half the value given
  }else if(i > number/2){
        console.log(`${number} is prime`);
    return true;
//final result after all tests...
  }else{
    return true;
  }
}
}