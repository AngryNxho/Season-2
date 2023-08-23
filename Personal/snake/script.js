const snake = document.getElementById("snake")
let horizontalSize = 0;
let verticalSize = 0;
function test(e, margin){
    // console.log(e.key);
    
    if (e.key === "ArrowRight"){
        horizontalSize += 25
        console.log(e.key);
    }else if (e.key === "ArrowLeft"){
        horizontalSize -= 25
        console.log(e.key);
    }else if (e.key === "ArrowUp"){
        verticalSize -= 25;
    }else{
        verticalSize += 25;

    }
    snake.style.marginLeft = horizontalSize
    snake.style.marginTop = verticalSize
}

document.addEventListener("keydown", test);

