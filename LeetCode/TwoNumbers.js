function twoNumbers(arrOne, arrTwo) {
  const firstArray = arrOne;
  const secondArray = arrTwo;
  let sum = 0;

  let len = 0;
  let total = [];

 
  (firstArray.length > secondArray.length)
    ? len = firstArray.length
    : len = secondArray.length

  // console.log(len);



  // console.log(sum);
    
  return total;
}

console.log(twoNumbers([1, 2, 3], [1, 8, 6])); // [2, 10, 9] ||  [2, 0, 0, 1] == [1, 0, 0, 2]
// console.log(twoNumbers([1, 2, 3, 4], [1, 2,4,5,6,8]));
// console.log(twoNumbers([5,4,6], [5,6,4]));
