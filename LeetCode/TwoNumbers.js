function TwoNumbers(arrOne, arrTwo){

  let sum = 0;
  let total = [];
  
  arrOne.length > arrTwo.length 
  ? len = arrOne.length
  : len = arrTwo.length;

// 2, 10, 9, 10 == 1, 0, 0, 0, 2

for (let x = 0; x < len; x++){
  (isNaN(arrOne[x]))
  ? arrOne[x] = 0
  : arrTwo[x] = 0;
  
  operation = arrOne[x] + arrTwo[x];

  if (operation <= 9 && operation >= 0){
    total.push(operation)
  } 
  else{
      total.push(0)
      sum += 1;
    }
    
    console.log(sum);  

} 


console.log(total);

  return "";
}

console.log(TwoNumbers([1, 10, 9, 10], [0, 0, 0, 0])); // 2, 0, 0, 1
