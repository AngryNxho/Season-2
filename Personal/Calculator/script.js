const allBtns = document.querySelectorAll(".btns");
const input = document.querySelector(".input");
const sign = document.querySelector(".sign");
const zero = document.querySelector(".zero");
const reset = document.querySelector(".del");
const plus = document.querySelector(".plus");
const dot = document.querySelector(".dot");
const equal = document.querySelector(".equal");
let saveNumbers = "";
let saveSign = [];
let restrictedSigns = ["+","-","AC","=","/","X","%", "+/-"]

allBtns.forEach(btnNumber => {
    btnNumber.addEventListener("click", () => {
        if (!restrictedSigns.includes(btnNumber.textContent)) {
            input.textContent = ""
            sign.textContent = "";
            saveNumbers += btnNumber.textContent;
            input.textContent = saveNumbers
        }

        if (restrictedSigns.includes(btnNumber.textContent)) {
            saveSign.push(btnNumber.textContent);
        }


        console.log(saveSign);
    })

})


