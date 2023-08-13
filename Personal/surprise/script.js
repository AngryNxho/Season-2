let phrases = ["Hola Fran :D","Te hice esta pequeña pagina para celebrar el día de tu cumpleaños"
,"Te deseo un feliz día y que disfrutes dentro de lo que la u te lo permita"
,"Quiero que tengas claro que eres una artista y que no podías haber elegido mejor carrera"
,"Mientras los demás hacen los proyectos para pasar, tu buscas un buen resultado"
,"Admiro tu fuerza de voluntad"
,"Todos te queremos mucho <3"
,"Nuevamente, FELIZ CUMPLEAÑOS!!!!"]

const text = document.getElementById("text");
const button = document.querySelector(".btn");

let x = 0;

button.addEventListener("click",  function(){
    const interval = setInterval(() => {
        console.log(phrases[x]);
        text.textContent = phrases[x];
        if (x < phrases.length){
            x++;
        }else{
            x= 0
            clearInterval(interval)
        }
    },5500)
    
})









