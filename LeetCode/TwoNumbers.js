function addTwoNumbers(l1, l2) {
  let total = [];
  let len;
  let sum  = 0;
  let index = [];

  l1.length > l2.length
  ? (len = l1.length)
  : (len = l2.length);
  
    for (let i = 0; i < len; i++){ 
      if (isNaN(l1[i])){
        l1.push(0);
      }else{
        l2.push(0)
      }

      op = l1[i] + l2[i];
      
      
      if (op > 9){
        sum++;
        total.push(op);
        index.push(Number(String(op).length));
      }else if (op <= 9 && op >= 0){
        total.push(op)
        index.push(Number(String(op).length));      }
      
      
    }      
    
    for (let z = 0; z < total.length; z++){
      // lastIndex = Number(String(total)[String(total).length - 1]);
      forLength = ([String(total[z]).length] - 1);

      if (index[z] > 1 && sum > 0){
        total[z] = Number(String(total[z])[forLength]);
      }
      
      if (sum > 0 && z !== 0){
        lessSum = sum - (sum - 1)
      }
    }
    
    console.log(`sum: ${sum} Total: ${total} Index: ${index}`);
    return ""; 
     
  }
  console.log(addTwoNumbers([2, 4, 3], [5, 6, 4])); // 8, 0, 7
  console.log(addTwoNumbers([9,9,9,9,9,9,9], [9,9,9,9]));
  //8,9,9,9,0,0,0,1




