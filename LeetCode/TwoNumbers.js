function twoNumbers(arrOne, arrTwo) {
  const firstArray = arrOne;
  const secondArray = arrTwo;

  let len = 0;
  let firstLoop = [];
  let total = [];
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
    firstLoop.push(firstArray[x] + secondArray[x])

  }


for (let i = 0; i < len; i++){

  if (firstLoop[i] >= 10){
    firstLoop[i] = 0;
    total.push(firstLoop[i]);
    sum += 1;

    while (sum > 0){
      firstLoop[i + 1] += sum;
      sum -= 1;
    }

  }else{
    total.push(firstLoop[i])
  }

  
}

console.log(total);

  return "";
}
console.log(twoNumbers([1, 2, 3], [1, 8, 6])); // [2, 10, 9] ==  [2, 0, 0, 1] 
