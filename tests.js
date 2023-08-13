let array = ["h", "o", "l", "a"];
let a = 0;
const time = setInterval(() => {
        console.log(array[a]);
        a++;
        if (a === array.length){
            clearInterval(time)
        }
    },1000);
