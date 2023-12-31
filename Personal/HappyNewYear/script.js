document.addEventListener("DOMContentLoaded", function () {
  // Define messages for each name
  const nameMessages = {
    esteban:
      "Hello Esteban! Here is your personalized message. This is an extended message intended to test the styling and layout of the letter section on the webpage",
    alejandra:
      "Greetings Alejandra! Check out this special note for you. We have crafted a longer message to observe how the text wraps within the confines of the styled div. It is important for us to see how the page handles content of varying length and maintains its structure.",
    francisca:
      "Hi Francisca! We have something special for you here. This message is deliberately lengthened to test the limits of our styling. We aim to provide a seamless and visually pleasing experience regardless of the message length or content.",
    lucas:
      "Hey Lucas! There is a unique message waiting for you. This extended piece of text serves to challenge the boundaries of our design, ensuring that longer paragraphs do not overflow or disrupt the overall layout of the webpage.",
  };

  // Handling the click event on the letter image
  const letterImage = document.querySelector(".closed img");
  const letterContent = document.querySelector(".letter");

  if (letterImage && letterContent) {
    letterImage.addEventListener("click", (event) => {
      event.preventDefault(); // Prevent the default action of the anchor tag
      letterImage.src = "./openLetter.png"; // Change the source of the image

      setTimeout(() => {
        letterImage.style.display = "none"; // Hide the image after 1 second

        setTimeout(() => {
          letterContent.classList.remove("hidden"); // Show the letter content
        }, 10); // Showing the letter content shortly after hiding the image
      }, 1000);
    });
  }

  // Handling the click events on the names in the grid
  const anchors = document.querySelectorAll(".grid a");

  anchors.forEach((anchor) => {
    anchor.addEventListener("click", function (event) {
      event.preventDefault();
      const clickedName = anchor
        .querySelector("div")
        .textContent.trim()
        .toLowerCase();

      // Retrieve the message for the clicked name
      const message =
        nameMessages[clickedName] ||
        "Welcome! This is a general message for all visitors.";

      console.log("Clicked name:", clickedName, "Message:", message); // Log the clicked name and message

      // Redirect to letter.html with the clicked name and message as query parameters
      window.location.href = `letter.html?name=${encodeURIComponent(
        clickedName
      )}&message=${encodeURIComponent(message)}`;
    });
  });
});
