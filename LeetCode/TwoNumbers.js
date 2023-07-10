function twoNumbers(arrOne, arrTwo) {
  const firstArray = arrOne;
  const secondArray = arrTwo;

  let len = 0;
  let total = [];
  let totalFinal = [];
  let sum = 0;
  firstArray.length > secondArray.length
    ? len = firstArray.length
    : len = secondArray.length

  

  for (let x = 0; x < len; x++){
    if (firstArray[x] === undefined){
      firstArray[x] = 0;
    }
    else if (secondArray[x] === undefined){
      secondArray[x] = 0;
    }
    total.push(firstArray[x] + secondArray[x])

  }

  console.log(total.length);

for (let i = 0; i < total.length; i++){
  while (i <= total.length){
    console.log(total[i]);
  }
}



  return "";
}
console.log(twoNumbers([1, 2, 3], [1, 8, 6])); // [2, 10, 9] ==  [2, 0, 0, 1] 
