function getRandomNumbers(numbers) {
    let arr = [];
    console.log(numbers);
    
    for (let x = 0; x < numbers; x++) {
        let random = Math.trunc(Math.random() * 9 + 1);
        if (!(arr.includes(random))) {
            arr.push(random);
        }else {
            x--;
        }
    }

    return arr
}

console.log(getRandomNumbers(5));