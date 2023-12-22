const allBtns = document.querySelectorAll(".btns");
const input = document.querySelector(".input");
const zero = document.querySelector(".zero");
const reset = document.querySelector(".del");
const sum = document.querySelector(".sum");
const dot = document.querySelector(".dot");
let inputNums = [0];
let signs = ["+","-","AC","=","/","X"]
input.textContent = 0;


allBtns.forEach(content => {
    content.addEventListener("click", () => {
        if (input.textContent == 0) {
            input.textContent = "";
        }

        function checkSign(arg) {
            console.log(typeof(Number(input.textContent)));
        }

        checkSign()
        
        if (!signs.includes(content.textContent)) {
            input.textContent += content.textContent;
        }
    })

})



reset.addEventListener("click", () => {
    input.textContent = 0;
})

sum.addEventListener("click", () => {
    input.textContent += 1;
})

dot.addEventListener("click", () => {

})