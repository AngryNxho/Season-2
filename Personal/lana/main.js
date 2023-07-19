const right = document.querySelector(".right");
const left = document.querySelector(".left");
const del = document.querySelector(".delete");
const lastIndex = document.querySelector(".lastIndex");
const content = document.querySelector(".content");
let element;

right.addEventListener("click", function addRight(){
    element = `RIGHT ${0}`
    content.appendChild(element)
    console.log("right");    
});

left.addEventListener("click", function addLeft(){
    console.log("left");    
});

del.addEventListener("click", function del(){
    console.log("del");    
}); 

lastIndex.addEventListener("click", function last(){
    console.log("last");    
});