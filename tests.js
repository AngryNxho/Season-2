let array = ["h", "o", "l", "a"];
let a = 0;
const time  = function(){
    setInterval(() => {
        console.log(array[a]);
        a++;
    },1000)
}

time();