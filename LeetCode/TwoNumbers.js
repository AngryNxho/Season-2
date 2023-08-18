function addTwoNumbers(l1, l2) {
  let total = [];
  let index = [];
  let len;
  let sum  = 0;

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
      }
      total.push(op)
    }


    
    
    console.log(total);
    return ""; 
  }
  // console.log(addTwoNumbers([2, 4, 3], [5, 6, 4])); // 8, 0, 7
  console.log(addTwoNumbers([9,9,9,9,9,9,9], [9,9,9,9]));
  //8,9,9,9,0,0,0,1




