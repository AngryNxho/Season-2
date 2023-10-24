const romanToInt = function(s) {

    //Written from left to right

  
// I puede colocarse antes de V (5) y X (10) para hacer 4 y 9.
// X puede colocarse antes de L (50) y C (100) para hacer 40 y 90.
// C puede colocarse antes de D (500) y M (1000) para hacer 400 y 900.
// Dado un número romano, conviértelo a un número entero.

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

    for (z in s) {
        for (let x = 0; x < Object.values(romans).length; x++){
            if (s[x] == Object.keys(romans)[z]){
                console.log(s[x], Object.keys(romans)[z]);
                result += Object.values(romans)[z]
            }
            // result += Object.values(romans)[x]

        }
    }
    return result;
};


console.log(romanToInt("MCMXCIV"))