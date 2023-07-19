const right = document.querySelector(".right");
const left = document.querySelector(".left");
const del = document.querySelector(".delete");
const lastIndex = document.querySelector(".lastIndex");
const content = document.querySelector(".content");
let element;
let leftCounter = 0;
let rightCounter = 0;
let positions = [];



right.addEventListener("click", function addRight(){
    element = document.createElement("p");
    element.textContent = ` ${rightCounter}R`;
    positions.push(element.textContent)
    console.log(positions);
    rightCounter++;
    content.append(positions[positions.length - 1]);
    
});

left.addEventListener("click", function addLeft(){
    element = document.createElement("p");
    element.textContent = ` ${leftCounter} L`;
    positions.push(element.textContent)
    console.log(positions);
    leftCounter++;
    content.append(positions[positions.length - 1]);
});

del.addEventListener("click", function del(){
    console.log("del");    
}); 

lastIndex.addEventListener("click", function last(){
    console.log("last");    
});