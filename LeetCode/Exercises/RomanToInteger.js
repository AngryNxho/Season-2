const romanToInt = function(s) {

    //Written from left to right

    const romans = {
        "I":1,
        "V":5,
        "X":10,
        "L":50,
        "C":100,
        "D":500,
        "M":1000
    }

    let result = 0;

    let i = 0
    for (let z in s) {
        for (const [key, value] of Object.entries(romans)) {
            console.log((key == s[z]) && (s[z] == "V" || s[z] == "X" ) && (s[i] == "I"));
        }
     }
    return result;
};


// I puede colocarse antes de V (5) y X (10) para hacer 4 y 9.
// X puede colocarse antes de L (50) y C (100) para hacer 40 y 90.
// C puede colocarse antes de D (500) y M (1000) para hacer 400 y 900.
console.log(romanToInt("VI"));

// if ((key == s[z]) && (s[z] == "V" || s[z] == "X" ) && (s[i] == "I")){
    //     console.log("Primer if");
    //     result += value - 1;
    // }
    // i++
   

 // else if ((key == s[z]) && (s[z] == "L" || s[z] == "C"  &&  s[i] == "X")) {
                //     console.log("Segundo if");
                //     result += value - 10;
                // }else if (((key == s[z]) && (s[z] == "D" || s[z] == "M"  &&  s[i] == "C"))) {
                    //     console.log("Tercer if");
                    //     result += value - 100;
                    // }else if (key == s[z]){
                        //     result += value;
                        //