let a = [10];
let b = [];
let sum = 0;

for (let x = 0; x < a.length; x++){
    if (a > 9 && a > 0){
        console.log(2);
        if (sum > 0){
            a = 0;
            sum += 1;
        }else{
            b.push(a);
        }
    }
    
    console.log(b[0]);
    
}