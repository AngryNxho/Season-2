function twoNumbers(arrOne, arrTwo) {
  const firstArray = arrOne;
  const secondArray = arrTwo;

  let len = 0;
  let total = [];
  let total2 = [];
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

for (let z of total){
  if (String(z).length > 1){
    sum += 1;
    while (String(z).length > 1){
      z--;
      if (z === 9 && sum > 0){
        z = 0;
        total2.push(z);
      }else{
        console.log(4387209482903);
      }
    }
  }else if (String(z).length < 1 && sum > 0){
    total2.push(z + 1);
  }
  console.log(z, sum);
  // console.log(total2);
}
  return "";
}
console.log(twoNumbers([1, 2, 3], [1, 8, 6])); // [2, 10, 9] ==  [2, 0, 0, 1] 
