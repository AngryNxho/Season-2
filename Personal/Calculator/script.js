const allBtns = document.querySelectorAll(".btns");
const input = document.querySelector(".input");


allBtns.forEach(allBtns => {
    allBtns.addEventListener("click", () => {
        input.textContent = (allBtns.textContent)
    })
})
