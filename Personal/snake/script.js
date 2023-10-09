const snake = document.querySelector(".snake");
const background = document.querySelector(".content");
let topPosition = 0; // initialize top position
let sidePosition = 0;
let snakeID;

// Myself and some chatgpt
function movement(e) {
    clearInterval(snakeID);
   
    if (e.key == "ArrowUp") {
        topPosition-= 25;
    }else if (e.key == "ArrowDown") {
        topPosition+= 25;
    } else if (e.key == "ArrowRight") {
        sidePosition -= 25;
    }else if (e.key == "ArrowLeft"){
        sidePosition += 25;
    }

    snakeID = setInterval(() => {
        movement(e)
    }, 150);
    
    
    snake.style.marginTop = topPosition + "px";
    snake.style.marginRight = sidePosition + "px";

    return null;
} 

function checkCollision () {
    console.log(snake.style.marginTop);
 }

document.addEventListener("keydown", movement);

console.log(checkCollision());