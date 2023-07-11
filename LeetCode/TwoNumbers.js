function TwoNumbers(arrOne, arrTwo){

  let sum = 0;
  let total = [];
  
  arrOne.length > arrTwo.length 
  ? len = arrOne.length
  : len = arrTwo.length;


  for (let x = 0; x < len; x++){
    op = arrOne[x] + arrTwo[x];
    if (op <= 9 && op >= 0){
      total.push(op);
    }else if (op > 9){
      while (op > 9 || op < 0){
        sum += 1;
        op = 0;
        total.push(op);
      }
      
    }
    
    
  }

for (let i of total){
  if (i + sum > 9){
    i = 0;
    while (sum > 0){
      total.push(sum)
      sum--;
    }
  }
}

console.log(total, sum);
  return "";
}


console.log(TwoNumbers([1, 10, 9], [1, 0, 0])); // 2, 0, 0, 1