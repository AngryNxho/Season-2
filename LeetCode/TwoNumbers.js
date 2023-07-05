function twoNumbers(arrOne, arrTwo){

    const firstArray = arrOne;
    const secondArray = arrTwo;

    firstArray.reverse();
    secondArray.reverse();

    let sum = [];
    let total = [];
    let acumulator = 0;
    backup = 0;

    for (let x = 0; x < firstArray.length; x++){
        if (((firstArray[x] && secondArray[x]) >= 0)
        && (firstArray[x] && secondArray[x]) <= 9){
            sum += firstArray[x] + secondArray[x]; 
        }
    }

    for (let i = 1; i <= sum.length; i++){
        if ((sum[sum.length - i] <= 9) && (sum[sum.length - i] > 0)){
            total.push(sum[sum.length - i]);
        }else{
            acumulator += 1;
        }
    }

    for(let z = 0; z <= acumulator; z++){
        if (total[z] == 1){
            total[z] = 0;
            backup = total[total.length - 1];
            total.pop();
        }
    }


    total.push(Number(backup) + 1)


    console.log(acumulator);

    
   return total;

}




console.log(twoNumbers([2,4,3], [5,6,4]));
console.log(twoNumbers([5,4,3], [5,6,4]));



console.log();