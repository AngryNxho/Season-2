function TwoNumbers(arrOne, arrTwo) {
  let sum = 0;
  let total = [];

  arrOne.length > arrTwo.length ? (len = arrOne.length) : (len = arrTwo.length);

  for (z of String(len)) {
    for (let i = 0; i < len; i++) {
      if (isNaN(arrOne[i])){
        arrOne.push(0);
      }else{
        arrTwo.push(0)
      }
      
      op = arrOne[i] + arrTwo[i];
      if (op > 9 && sum > 0) {
        console.log(`${op} es mayor que 9`);
        sum += 1;
      }

      if (op <= 9 && op >= 0) {
        total.push(op);
        // console.log(op == 9);
      } else if (op > 9 || op < 0) {
        op = 0;
        total.push(op);
      }

      console.log(op + sum);
    }
  }

  console.log(total, sum);
  return "";
}
console.log(TwoNumbers([1, 9, 9, 0], [1, 1, 0, 0])); // 2, 0, 0, 1
