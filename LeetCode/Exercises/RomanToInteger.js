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

    let result = "";


    for (z in s) {
        console.log(123);
        for (let x = 0; x < Object.values(romans).length; x++){
            console.log(s[x]);
            // result += Object.values(romans)[x]

        }
    }
    return result;
};


console.log(romanToInt("III"))