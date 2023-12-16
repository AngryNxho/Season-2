const allBtns = document.querySelectorAll(".btns");
const input = document.querySelector(".input");
const zero = document.querySelector(".zero");
const reset = document.querySelector(".del");
const fakeZero = document.querySelector(".hide");
let inputNums = [0];
input.textContent = 0;

allBtns.forEach(allBtns => {
    input.textContent = "";
    allBtns.addEventListener("click", (e) => {
        inputNums.push(allBtns.textContent);
        console.log(input.textContent == 0)
        if (inputNums.length <= 6) {
            input.textContent += inputNums[inputNums.length - 1];
        }
    })
})

reset.addEventListener("click", () => {
    inputNums = [];
    input.textContent = 0;
})