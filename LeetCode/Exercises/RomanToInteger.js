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

    for (let x = 0; x < Object.values(romans).length; x++){
        for (z in s) {
        
            console.log((s[z] =="I"), (s[s.length - z] == "X"));
             if ((s[z] == Object.keys(romans)[x]) && (result < s.length) ){
                 console.log("Primer if");
                 result += (Object.values(romans)[x]);
             }

             else if ((s[z] =="I") && (result < s.length)){
                 console.log("else IF");
                 result += Object.values(romans)[z] - 1;
             }
            // else if ((s[x] == "L" && s[x+1] == "C") && (result < s.length)){
            //     result += Object.values(romans)[z] - 1;
            //     console.log("Segundo if");
            // }

            
        }
    }
    return result;
};

// I puede colocarse antes de V (5) y X (10) para hacer 4 y 9.
// X puede colocarse antes de L (50) y C (100) para hacer 40 y 90.
// C puede colocarse antes de D (500) y M (1000) para hacer 400 y 900.
console.log(romanToInt("X"))