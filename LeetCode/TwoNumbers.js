function TwoNumbers(arrOne, arrTwo) {
  let total = [];
  let sum = 0;

  arrOne.reverse();
  arrTwo.reverse();
  
  arrOne.length > arrTwo.length ? (len = arrOne.length) : (len = arrTwo.length);
  
  for (z of String(len)) {
    for (let i = 0; i < len; i++) {
      if (isNaN(arrOne[i])){
        arrOne.push(0);
      }else{
        arrTwo.push(0)
      }
      
      op = arrOne[i] + arrTwo[i];
      if (op <= 9 && op >= 0) {
        total.push(op);
        // console.log(op == 9);
      }
       else if (op > 9 || op < 0) {
        op = 0;
        sum += 1;
        total.push(op);
      }
    }
  }

for (let z = 0; z < total.length; z++){
  if (total[z] > 9 && total[z] < 0){
    console.log(2);
  }
}  
return "";
}
console.log(TwoNumbers([2, 4, 3], [5, 6, 4])); // 2, 0, 0, 0, 0, 1;
// console.log(TwoNumbers([0], [0])); // 2, 0, 0, 0, 0, 1;
