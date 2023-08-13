let phrases = ["Feliz Cumpleaños Fran!!!","Pasalo excelente y recuerda lo que dice el bromas",
"Smile and put on a happy face", 
"Se que te irá muy bien en tu tesis",
"Y tendras un futur brillante", 
"Asi que decidí hacerte este pequeño engañito para el día de tu cumple",
"and i know it makes you nervous, but i promise you it's WORTH IT",
"To show 'em everything you kept inside",
"Dont hide",
"quiero recordarte que tu familia siempre estará para ti.",
"Come out and play"];
let time = [500, 1000];


const times = function(){
    for (let x = 0; x < phrases.length;){
        console.log(phrases[setInterval(()=> {
            x++;
        },500)]);
        x++;
    }

}

function displayMessage(phrases){
    times();
    return "";
}


console.log(displayMessage(phrases, null));


