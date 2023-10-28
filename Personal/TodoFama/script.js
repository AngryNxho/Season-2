const input = document.querySelector(".input");
const width = document.querySelector(".width");
const button = document.querySelector(".btn");
let content = document.querySelector(".content");
const toques = document.querySelector(".toques");

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
            }

        }
    }

    return toques;
}


button.addEventListener("click", () => {
    let number = document.createElement("h1");
    number.textContent = 7832498324980;
    content.append(getRandomNumber(width.value))
    
})
