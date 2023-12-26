const letter = document.querySelector(".closed img"); // Select the img inside the anchor tag with class 'closed'

letter.addEventListener("click", (event) => {
    event.preventDefault(); // Prevent the default action of the anchor tag
    letter.src = "./openLetter.png"; // Change the src of the img
    setTimeout(() => {
        letter.classList.add("hidden")
    }, 1000);
});
