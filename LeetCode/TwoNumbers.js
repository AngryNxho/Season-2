function TwoNumbers(arrOne, arrTwo) {
  let firstLoop = [];
  let total = [];
  let sum = 0;
  let index = [];
  
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
      if(Number(op) > 9){
        sum++;
      }
      firstLoop.push(op);      
    }     


    
    for (let z = 1; z < firstLoop.length; z++){
      firstLoop[z] = (Number(firstLoop[z][String(firstLoop[z]).length - 1]) + sum - (sum - 1));
      sum--;
      if (sum < 0){
        sum = 0;
      }
    }
    console.log(firstLoop, sum);
    return ""; 
  }  
  console.log(TwoNumbers([9,9,9,9,9,9,9], [9,9,9,9])); 
  //8,9,9,9,0,0,0,1


