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

    let result = [];
    let c = 0;
    // const romans = [I, V, X, L, C, D, M] = [1, 5, 10, 50, 100, 500, 1000];

    for (let z in romans){
        for (let x = 0; x < s.length; x++){
            console.log(s.length == result.length);
            
            if ((Object.keys(romans)[x] == s[x]) && (c  == result.length)){
                result += (Object.keys(romans)[x])
                c++;
            }
        }
    }

    return result;
};


console.log(romanToInt("II"))