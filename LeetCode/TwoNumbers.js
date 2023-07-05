function twoNumbers(arrOne, arrTwo){

    const firstArray = arrOne;
    const secondArray = arrTwo;

    firstArray.reverse();
    secondArray.reverse();

    let sum = [];
    let total = [];
    let acumulator = 0;
    backup = 0;
    let x;


    for (x = 0; x < firstArray.length; x++){
        if (firstArray[x] + secondArray[x] <= 9 
        && firstArray[x] + secondArray[x] > 0){
            sum.push(firstArray[x] + secondArray[x]);
        }else{
            sum.push(0);
            acumulator += 1;
        }
    }


    for (i of sum){
        if (i == 0){
            i = 0;
        }
    }


    
   return "";

}




console.log(twoNumbers([2,4,3], [5,6,4]));
// console.log(twoNumbers([5,4,3], [5,6,4]));
// console.log(twoNumbers([5,4,6], [5,6,4]));


