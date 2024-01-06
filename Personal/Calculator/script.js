const allBtns = document.querySelectorAll(".btns");
const input = document.querySelector(".input");
const sign = document.querySelector(".sign");
const zero = document.querySelector(".zero");
const reset = document.querySelector(".del");
const plus = document.querySelector(".plus");
const dot = document.querySelector(".dot");
const equal = document.querySelector(".equal");
const signs = document.querySelectorAll(".select");
let saveNumbers = "";
let saveSign = [];
let restrictedSigns = ["+","-","AC","=","/","X","%", "+/-"]

allBtns.forEach(btnNumber => {
    btnNumber.addEventListener("click", () => {
        if (!restrictedSigns.includes(btnNumber.textContent)) {
            input.textContent = "";
            sign.textContent = "";
            saveNumbers += btnNumber.textContent;
            input.textContent = saveNumbers;
            sign.textContent = 123;
            console.log(btnNumber.textContent);
        }

        if (restrictedSigns.includes(btnNumber.textContent)) {
            saveSign.push(btnNumber.textContent);
            sign.textContent = saveSign[saveSign.length - 1]
        }
    })
})


