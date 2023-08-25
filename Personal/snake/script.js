const snake = document.getElementById("snake");
let horizontalSize = 0;
let verticalSize = 0;
function test(e){
    // console.log(e.key);
    
    if (e.key === "ArrowRight"){
        horizontalSize += 25
        snake.style.marginLeft = horizontalSize
        console.log(horizontalSize);
    }else if (e.key === "ArrowLeft"){
        horizontalSize -= 25
        snake.style.marginRight = horizontalSize
        console.log(horizontalSize);
    }

    
}
document.addEventListener("keydown", test);

