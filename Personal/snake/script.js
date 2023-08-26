const snake = document.getElementById("snake");
let horizontalSize = 0;
let verticalSize = 0;
function test(e){
    console.log(e.key);
    
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

}
document.body.addEventListener("keydown", test);