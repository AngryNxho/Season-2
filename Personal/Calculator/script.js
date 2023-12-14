const allBtns = document.querySelectorAll(".btns");
const input = document.querySelector(".input");
const zero = document.querySelector(".zero");
const reset = document.querySelector(".del");
const fakeZero = document.querySelector(".hide");
let inputNums = [];

allBtns.forEach(allBtns => {
    allBtns.addEventListener("click", (e) => {
        inputNums.push(allBtns.textContent);
        
        input.textContent += inputNums[inputNums.length - 1];
    })
})


reset.addEventListener("click", () => {
    input.textContent = "0"
})