function TwoNumbers(arrOne, arrTwo) {
  let total = [];
  let sum = 0;
  let len;  
  arrOne.length > arrTwo.length 
  ? (len = arrOne.length) 
  : (len = arrTwo.length);
  
    for (let i = 0; i <= len; i++) {
      if (isNaN(arrOne[i])){
        arrOne.push(0);
      }else{
        arrTwo.push(0)
      }
      op = String(arrOne[i] + arrTwo[i]);

      if (op > 9){
        sum++;  
        if (i == 0){
          total.push((Number(op[op.length - 1]) + sum - (sum - 1)) - 1);
        }
        total.push(Number(op[op.length - 1]) + sum - (sum - 1) );
      }else if (op <= 9){
        total.push(Number(op) + sum - (sum - 1));
        sum -= 1;
      }
      
      if (sum < 0){
        sum = 0;
      }
    }     

    for (let z = 0; z < total.length; z++){
      if (String(total[z]).length > 1){
        if (total[z] == 10){
          total[z] = 0
        }
      }
    }


    return total; 
  }  
  console.log(TwoNumbers([9,9,9,9,9,9,9], [9,9,9,9])); 
  console.log(TwoNumbers([2, 4, 3], [5, 6, 4])); 
  //8,9,9,9,0,0,0,1



