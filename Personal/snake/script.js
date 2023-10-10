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
    }, 100);
    
    
    snake.style.marginTop = topPosition + "px";
    snake.style.marginRight = sidePosition + "px";

    console.log(snake.style.marginTop, snake.style.marginRight);
    if ((snake.style.marginTop == 500 + "px") || 
    (snake.style.marginTop == -500 + "px") ||
    (snake.style.marginRight == 500 + "px")|| 
    (snake.style.marginRight == -500 + "px")) {
        checkCollision();
    }

    return null ;
} 

function checkCollision() {
    snake.style.marginTop = 0 + "px"
    snake.style.marginRight = 0 + "px"
    
    topPosition = 0
    sidePosition = 0;
}

document.addEventListener("keydown", movement);


console.log(checkCollision());