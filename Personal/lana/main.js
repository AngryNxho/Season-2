const right = document.querySelector(".right");
const left = document.querySelector(".left");
const content = document.querySelector(".content");
const stats = document.querySelector(".stats");

let rightCounter = 1;
let positions = [];

function removeElementWithAnimation(element) {
  element.style.animation = "fadeOut 0.3s ease forwards";
  element.addEventListener("animationend", function () {
    content.removeChild(element);
  });
}

right.addEventListener("click", function addRight() {
  const element = document.createElement("button");
  element.textContent = ` ${rightCounter}R`;
  element.style.height="60px"
  element.style.width="60px"
  element.classList.add("button");
  rightCounter++;
  positions.push(element.textContent);

  content.appendChild(element);

  element.addEventListener("click", function () {
    removeElementWithAnimation(element);
  });

  console.log(positions[positions.length - 1]);
});

left.addEventListener("click", function addLeft() {
  const element = document.createElement("button");
  element.textContent = ` ${rightCounter}L`;
  element.classList.add("button");
  rightCounter++;
  positions.push(element.textContent);

  content.appendChild(element);

  element.addEventListener("click", function () {
    removeElementWithAnimation(element);
  });

  console.log(positions[positions.length - 1]);
});

lastIndex.addEventListener("click", () => {
  stats.textContent = "";
  stats.style.textAlign = "center";
  stats.textContent = positions[positions.length - 1];
  setTimeout(() => {
    stats.textContent = "";
  }, 5000);
});
