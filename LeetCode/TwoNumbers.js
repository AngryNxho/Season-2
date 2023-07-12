function TwoNumbers(arrOne, arrTwo){

  let sum = 0;
  let total = [];
  
  arrOne.length > arrTwo.length 
  ? len = arrOne.length
  : len = arrTwo.length;


for (let x = 0; x < len; x++){
  operation = arrOne[x] + arrTwo[x];
  console.log(arrOne == undefined, arrTwo == undefined);
  if (9 >= operation ){
    console.log(`Entra en el primer if con ${operation} `);
    total.push(operation)
  }

    if (operation > 9){
      operation = 0;
      total.push(operation);
      console.log(`entra en segundo if con ${operation}`);
    }

}

console.log(total);

  return "";
}


console.log(TwoNumbers([1, 10, 9, 10, 4], [0, 0, 0, 0])); // 2, 0, 0, 1