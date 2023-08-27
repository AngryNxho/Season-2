const snake = document.getElementById("snake");
const box = document.querySelector(".box");
let extra = document.querySelector(".extraW");
let horizontalSize = 0;
let verticalSize = 0;
function test(e){
    console.log(e.key);
    extra.style.marginLeft= Math.trunc(Math.random() * 450);
    if (e.key === "ArrowRight"){
        horizontalSize += 25;
        console.log(horizontalSize)
    }
    else if (e.key === "ArrowLeft"){
        horizontalSize -= 25;
        console.log(horizontalSize)
    }else if (e.key ==="ArrowUp"){
        verticalSize += 25;
        console.log(verticalSize);
    }else if (e.key === "ArrowDown"){
        verticalSize -= 25;
        console.log(verticalSize);
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
document.addEventListener("keydown", test);