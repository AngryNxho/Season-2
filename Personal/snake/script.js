const snake = document.querySelector(".snake");
const background = document.querySelector(".content");
let apple = document.querySelector(".apple");
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
    }, 75);
    
    
    snake.style.marginTop = topPosition + "px";
    snake.style.marginRight = sidePosition + "px";

    if ((snake.style.marginTop == 500 + "px") || 
    (snake.style.marginTop == -500 + "px") ||
    (snake.style.marginRight == 500 + "px")|| 
    (snake.style.marginRight == -500 + "px")) {
        checkCollision();
    }

    console.log(snake.style.marginTop == apple.style.marginTop);


    return null ;
} 

function checkCollision() {
    snake.style.marginTop = 0 + "px"
    snake.style.marginRight = 0 + "px"
    
    topPosition = 0
    sidePosition = 0;
}



document.addEventListener("keydown", movement);
document.addEventListener("click", () => {
    console.log(123);
    apple.style.marginTop = "400px"
    apple.classList.remove("hidden");
});
