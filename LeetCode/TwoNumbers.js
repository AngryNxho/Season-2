function TwoNumbers(arrOne, arrTwo) {
  let firstLoop = [];
  let total = [];
  let sum = [];
  arrOne.reverse();
  arrTwo.reverse();

  
  arrOne.length > arrTwo.length 
  ? (len = arrOne.length) 
  : (len = arrTwo.length);
  
    for (let i = 0; i < len; i++) {
      if (isNaN(arrOne[i])){
        arrOne.push(0);
      }else{
        arrTwo.push(0)
      }
      op = String(arrOne[i] + arrTwo[i]);
      lastIndex = op[op.length - 1];
      total.push(lastIndex);
      sum.push(op.length);
      
    }
    for (x = 1; x < String(total.length); x++){ 
      total[x] = Number(total[x]) + (sum[x]);
      console.log();
     }   
     
    return total; 
    
  }
  console.log(TwoNumbers([9,9,9,9,9,9,9], [9,9,9,9])); 
  //8,9,9,9,0,0,0,1
