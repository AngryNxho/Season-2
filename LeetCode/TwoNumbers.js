function TwoNumbers(arrOne, arrTwo) {
  let total = [];
  let sum = 0;
  let len;
  arrOne.length > arrTwo.length
  ? (len = arrOne.length)
  : (len = arrTwo.length);

    for (let i = 0; i < len; i++) {
      if (isNaN(arrOne[i])){
        arrOne.push(0);
      }else{
        arrTwo.push(0)
      }
      op = Number(arrOne[i] + arrTwo[i]);
      if (op <= 9 && op >= 0){
        if (i > 0 && )
        let opSum = (op + sum - (sum - 1))
        console.log(`numero: ${op} suma: ${opSum}`);
      }else if (op > 9){
        op += sum - (sum - 1)
        sum++;
        checkLen = (String(op).length);
        if (i == 0){
          total.push(Number(String(op)[checkLen - 1]));  
        }

      }

    }
    



    return ""; 
    // `total: ${total} - Adicionador: ${sum}`;
  }
  console.log(TwoNumbers([9,9,9,9,9,9,9], [9,9,9,9]));
  console.log(TwoNumbers([2, 4, 3], [5, 6, 4])); // 8, 0, 7
  //8,9,9,9,0,0,0,1



