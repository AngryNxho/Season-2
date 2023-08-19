let numbers = [18, 18, 18, 18, 9, 9, 9, 9];
let sum = 1;

numbers.push(0);
for (let x = 0; x < numbers.length; x++){
    console.log(numbers[x] + numbers[++x]);
}
