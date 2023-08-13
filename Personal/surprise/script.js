let phrases = ["Feliz Cumpleaños Fran!!!","Pasalo excelente y recuerda lo que dice el bromas",
"Smile and put on a happy face", 
"Se que te irá muy bien en tu tesis",
"Y tendras un futuro brillante", 
"Asi que decidí hacerte este pequeño engañito para el día de tu cumple",
"quiero recordarte que tu familia siempre estará para ti.",
"y que no importa cual sea el problema, puedes contar con nosotros"];

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
    },3000)
    
})









