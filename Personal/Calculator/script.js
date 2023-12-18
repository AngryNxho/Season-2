const allBtns = document.querySelectorAll(".btns");
const input = document.querySelector(".input");
const zero = document.querySelector(".zero");
const reset = document.querySelector(".del");
let inputNums = [0];
input.textContent = 0;

function checkSign (sign) {
    if (sign == "+") {
        console.log("sum")
    }
}

allBtns.forEach(allBtns => {
    allBtns.addEventListener("click", () => {
        inputNums.push(Number(allBtns.textContent));

        if (input.textContent == 0) {
            input.textContent = "";
        }

       
        if (inputNums.length <= 6) {
            input.textContent += allBtns.textContent;
        }else {
            input.style.fontSize = "70px";
        }

        
    })
})


reset.addEventListener( "click", () => {
    input.textContent = 0;
    inputNums = [];
})


