function getRandomNumber(max) {
    let arr = [];
    let randomNumber;
    for (let x = 0; x < Number(max); x++) {
        randomNumber = Math.trunc(Math.random() * 9) + 1;
        if (!(arr.includes(randomNumber))) {
            arr.push(randomNumber);
        }else {
            x--;
        }
    }
    
    let toques = 0;

    for (z of arr) {
        for (let i = 0; i < arr.length; i++){
            if (z == arr[i]) {
                toques++;
                toques.textContent = 11234
            }

        }
    }

    return arr;
}