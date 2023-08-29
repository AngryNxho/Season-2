const snake = document.getElementById("snake");
const box = document.querySelector(".box");
const start = document.querySelector(".start");
let extra = document.querySelector(".extraW");
let horizontalSize = 0;
let verticalSize = 0;

function randomXY(){
    let random = Math.trunc(Math.random() * 2) + 1;
    
    if (random === 1){
        random = -450;
    }else{
        random = 450
    }
    
    return random;
}


function movement(e){
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
    }else{
        verticalSize -= 25;
        console.log(verticalSize);
    }
    
    let horizontalDir = (Math.trunc(Math.random() * randomXY()) + 1);
        snake.style.width = 25;
    snake.style.marginLeft = horizontalSize;
    snake.style.marginBottom = verticalSize;
    if (horizontalSize >= 450 || horizontalSize <= -450){
        horizontalSize = 0;
        verticalSize = 0;
    }else if (verticalSize >= 450 || verticalSize <= -450){
        verticalSize = 0;
        horizontalSize = 0;
    }
    // console.log(Math.trunc(Math.random() * 450));
    
    return horizontalDir;
}
snake.classList.add("hidden");
extra.classList.add("hidden");

document.addEventListener("keydown", movement);

start.addEventListener("click", function(){
    snake.classList.remove("hidden")
    extra.classList.remove("hidden");

});


document.addEventListener("click", function(){
    extra.style.marginLeft = 150;
    console.log(extra.style.marginLeft);

})