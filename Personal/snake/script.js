const snake = document.getElementById("snake");
const box = document.querySelector(".box");
const start = document.querySelector(".start");
let extra = document.querySelector(".extraW");
let horizontalSize = 0;
let verticalSize = 0;

function marginXY(){
    counter = Math.trunc(Math.random() * 2) + 1;
    console.log(counter);
}

function movement(e){
    extra.style.marginLeft= Math.trunc(Math.random() * 450);
    if (e.key === "ArrowRight"){
        horizontalSize += 25;
        // console.log(horizontalSize)
    }
    else if (e.key === "ArrowLeft"){
        horizontalSize -= 25;
        // console.log(horizontalSize)
    }else if (e.key ==="ArrowUp"){
        verticalSize += 25;
        // console.log(verticalSize);
    }else if (e.key === "ArrowDown"){
        verticalSize -= 25;
        // console.log(verticalSize);
    }
    snake.style.marginLeft = horizontalSize;
    snake.style.marginBottom = verticalSize;
    if (horizontalSize >= 450 || horizontalSize <= -450){
        horizontalSize = 0;
        verticalSize = 0;
    }else if (verticalSize >= 450 || verticalSize <= -450){
        verticalSize = 0;
        horizontalSize = 0;
    }
    console.log(Math.trunc(Math.random() * 450));
}
snake.classList.add("hidden");
extra.classList.add("hidden");
document.addEventListener("keydown", movement);

start.addEventListener("click", function(){
    snake.classList.remove("hidden")
    extra.classList.remove("hidden");

});

document.addEventListener("click", marginXY);
