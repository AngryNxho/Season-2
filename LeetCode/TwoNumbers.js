function twoNumbers(arrOne, arrTwo) {
  const firstArray = arrOne;
  const secondArray = arrTwo;

  let len = 0;
  let total = [];

  if (firstArray.length > secondArray.length){
    len = firstArray.length}
  else { 
    len = secondArray.length};

  for (let x = 0; x < len; x++){
    console.log(typeof(firstArray));

  }

  console.log(total);
    
  return "";
}

console.log(twoNumbers([1, 2, 3], [9, 2, 3, 4])); // [0, 5, 6, 4]
// console.log(twoNumbers([1, 2, 3, 4], [1, 2,4,5,6,8]));
// console.log(twoNumbers([5,4,6], [5,6,4]));
