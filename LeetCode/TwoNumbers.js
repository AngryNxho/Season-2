function twoNumbers(arrOne, arrTwo) {
  const firstArray = arrOne;
  const secondArray = arrTwo;

  let len = 0;
  let check = [];
  let total = [];
  let acumulator = 0;
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
    check.push(firstArray[x] + secondArray[x])
  }

for (let z = 0; z < check.length; z++){
  if (check[z] > 9){
    check[z] = 0;
    total.push(check[z])
    acumulator++;
  }
}
    console.log(acumulator);
    return "";
}

console.log(twoNumbers([1, 2, 3], [1, 8, 6, 2])); // [2, 10, 9] ==  [2, 0, 0, 1] 
