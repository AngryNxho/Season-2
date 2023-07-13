function TwoNumbers(arrOne, arrTwo){

  let sum = 0;
  let total = [];


  (arrOne.length > arrTwo.length)
  ? len = arrOne.length
  : len = arrTwo.length;


for (z of String(len)){
  for (let i = 0; i < len; i ++){
    isNaN(arrOne[i])
    ? arrOne[i] = 0
    : arrTwo[i] = 0;
    op = arrOne[i] + arrTwo[i];

    if (op <= 9 && op >= 0){
      total.push(op);
      console.log(op == 9);
      
    }else if (op > 9 || op < 0){
      op = 0;
      total.push(op)
    }
  }
}

  console.log(total);

  return "";
}
console.log(TwoNumbers([1, 9, 9, 0], [1, 1, 0, 0])); // 2, 0, 0, 1
