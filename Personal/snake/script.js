const snake = document.getElementById("snake")
let horizontalSize = 25;
let verticalSize = 25;
function test(e, margin){
    // console.log(e.key);
    console.log(e.key === "ArrowUp");
    if (e.key === "ArrowRight"){
        snake.style.marginLeft = horizontalSize
        horizontalSize += 25
        console.log(horizontalSize);
    }else if (e.key === "ArrowLeft"){
        snake.style.marginRight = horizontalSize
        horizontalSize += 25
        console.log(horizontalSize);
    }

}

document.addEventListener("keydown", test);

