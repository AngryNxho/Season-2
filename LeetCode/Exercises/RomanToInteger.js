const romanToInt = function (s) {
  //Written from left to right

  const romans = {
    I: 1,
    V: 5,
    X: 10,
    L: 50,
    C: 100,
    D: 500,
    M: 1000,
  };

  const romansConstraints = {
    I: 5,
    IV: 4,
    IX: 9,
    XL: 40,
    XC: 90,
    CD: 400,
    CM: 900,
  };

  let result = 0;
  let counter;
  for (let loop in s) {
<<<<<<< HEAD
      let first = 0;
      for (let [key, value] of Object.entries(romans)) {
        if (s[loop] == key) {
            if ((s[loop] == "X" || s[loop] == "V") && s[first] == "I") {
                result += (value - 1);
                first++

            }
        }
=======
    for (let [key, value] of Object.entries(romans)) {
      if (s[loop] ==  key) { 
        result += value;
      }
>>>>>>> e51816af (f)
    }
  
  }

  
  return result;
};

// I puede colocarse antes de V (5) y X (10) para hacer 4 y 9.
// X puede colocarse antes de L (50) y C (100) para hacer 40 y 90.
// C puede colocarse antes de D (500) y M (1000) para hacer 400 y 900.
// console.log(romanToInt("MCMXCIV")) // 1000, 900, 90, 4
<<<<<<< HEAD
console.log(romanToInt("IV")); // 1000, 900, 90, 4
console.log(romanToInt("IVV")); // 1000, 900, 90, 4
console.log(romanToInt("IVIVIV")); // 1000, 900, 90, 4
// CM 90 IV 40


            // else if ((s[loop] == "L" || s[loop] == "C") && s[first] == "X") {
                // result += (value - 10);
                // first++
// 
            // } else if ((s[loop] == "D" || s[loop] == "M") && s[first] == "C") {
                // result += (value - 100);
                // first++
            // }
=======
// console.log(romanToInt("MCMXCIV")); // 1000, 900, 90, 4
console.log(romanToInt("IX")); // 1000, 900, 90, 4 IV VX
// 1000, 100, 1000, 10, 100, 1 , v
>>>>>>> e51816af (f)
