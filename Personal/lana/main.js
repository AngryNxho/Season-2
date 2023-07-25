const right = document.querySelector(".right");
const left = document.querySelector(".left");
const del = document.querySelector(".delete");
const lastIndex = document.querySelector(".lastIndex");
const content = document.querySelector(".content");
const content2 = document.querySelector(".content").style;

let element;
let leftCounter = 1;
let rightCounter = 1;
let positions = [];

right.addEventListener("click", function addRight() {
  element = document.createElement("button");
  element.textContent = ` ${rightCounter}R`;
  element.style.border = "1px solid black"; // Set the border style
  element.style.height = "40px";
  element.style.width = "50px";

  content.style.color = "#7209b7";
  rightCounter++;
  positions.push(element.textContent);

  if (positions.length % 11 === 1) {
    // Create a new row after every 10 elements
    content.style.gridAutoFlow = "row";
  }
  element.style.borderRadius = "10px";
  content.style.gridTemplateColumns = `repeat(${Math.min(positions.length, 10)}, 1fr)`;
  content.append(element);
  console.log(positions[positions.length - 1]);
});
