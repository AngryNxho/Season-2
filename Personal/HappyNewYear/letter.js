document.getElementById("openLetterButton").addEventListener("click", function() {
    var letter = document.getElementById("letter");
    letter.classList.toggle("hidden");
    letter.classList.toggle("visible");
});
