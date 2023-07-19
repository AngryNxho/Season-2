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
      firstLoop.push(op);      
      


    }     


    for (let z = 0; z < firstLoop.length; z++){
      len2 = ((firstLoop[z]).length);
      console.log(String(firstLoop)[firstLoop.length - len2]);

    }

    return ""; 
  }
  console.log(TwoNumbers([9,9,9,9,9,9,9], [9,9,9,9])); 
  //8,9,9,9,0,0,0,1


