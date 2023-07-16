function TwoNumbers(arrOne, arrTwo) {
  let firstLoop = [];
  let total = [];
  let sum = 0;

  
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
      if (op <= 9 && op >= 0){
        firstLoop.push(op);
      }else{
        sum += 1;
        firstLoop.push(op);
      }

    }     
    for (let z = 1; z < firstLoop.length; z++){
      // firstLoop[z] = (firstLoop[z] + sum - (sum - 1)) 

      console.log(firstLoop[z][0]);
      if (sum > 0){
        sum -= 1;
      }
    }

    return ""; 
  }
  console.log(TwoNumbers([9,9,9,9,9,9,9], [9,9,9,9])); 
  //8,9,9,9,0,0,0,1


