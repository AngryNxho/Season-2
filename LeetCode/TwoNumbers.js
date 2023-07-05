function twoNumbers(arrOne, arrTwo) {
  const firstArray = arrOne;
  const secondArray = arrTwo;

  firstArray.reverse();
  secondArray.reverse();

  let len = 0;
  let total = [];
  let acumulator = 0;
  (firstArray.length > secondArray.length) 
    ? len = firstArray.length 
    : len = secondArray.length;
  

  for (x = 0; x < len; x++){
    console.log(firstArray[x] + secondArray[x]);
    total.push(firstArray[x] + secondArray[x]);
  }

  total.pop();
  return total;
}

console.log(twoNumbers([1, 2, 3], [1, 2, 3, 4]));
// console.log(twoNumbers([5,4,6], [5,6,4]));
