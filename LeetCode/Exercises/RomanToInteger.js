const romanToInt = function(s) {

    //Written from left to right

    const romans = {
        "I":1,
        "IV":4,
        "IX":9,
        "XL":40,
        "XC":90,
        "V":5,
        "X":10,
        "L":50,
        "C":100,
        "D":500,
        "M":1000
    }


    let result = 0;
    for (let z in s) {
        for (let [key, value] of Object.entries(romans)) {
        }
        
    }
    return result;
};


// I puede colocarse antes de V (5) y X (10) para hacer 4 y 9.
// X puede colocarse antes de L (50) y C (100) para hacer 40 y 90.
// C puede colocarse antes de D (500) y M (1000) para hacer 400 y 900.
// console.log(romanToInt("MCMXCIV")) // 1000, 900, 90, 4
console.log(romanToInt("MCMXCIV")) // 1000, 900, 90, 4


// if ((key == s[z]) && (s[z] == "V" )|| (s[z] == "X" ) && (s[i] == "I")){
    // c++;
    // console.log(value);
    // result = value;
// }

// i++;
// if (i >= s.length){
    // i = 0;
// }