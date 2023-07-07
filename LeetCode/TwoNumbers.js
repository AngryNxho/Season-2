function twoNumbers(arrOne, arrTwo) {
  const firstArray = arrOne;
  const secondArray = arrTwo;

  

  let len = 0;
  let total = [];
  let acumulator = 0;
  (firstArray.length > secondArray.length) 
    ? len = firstArray.length 
    : len = secondArray.length;
  
  console.log(firstArray.length);
  console.log(secondArray.length);
  for (x = 0; x < len; x++){
    if (firstArray[x] + secondArray[x] >= 0){
      total.push(firstArray[x] + secondArray[x]);
    }else{
        (firstArray  == len || secondArray == len) 
        ? total.push(0 + firstArray[firstArray.length - 1])
        : total.push(0 + secondArray[secondArray.length - 1])
      
    }
  }
  return total;
}

console.log(twoNumbers([1, 2, 3], [1, 2, 3, 4]));
console.log(twoNumbers([1, 2, 3, 4], [1, 2, 3, ]));
// console.log(twoNumbers([5,4,6], [5,6,4]));
