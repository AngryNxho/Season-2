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
    IV: 4,
    IX: 9,
    XL: 40,
    XC: 90,
    CD: 400,
    CM: 900,
  };

  let result = 0;
  let counter;
  let counter2;
  counter = 0;
  counter2 = 1;
  for (let x = 0; x < s.length; x++) {

      for (let [key2, value2] of Object.entries(romansConstraints)) {
        
        // "MCMX  CIV"; /IX XV VI
        if (s[counter] + s[counter2] == key2) {
            console.log(s[counter] + s[counter2], key2);
        }
    }
  }

  return result;
};

// I puede colocarse antes de V (5) y X (10) para hacer 4 y 9.
// X puede colocarse antes de L (50) y C (100) para hacer 40 y 90.
// C puede colocarse antes de D (500) y M (1000) para hacer 400 y 900.
// console.log(romanToInt("MCMXCIV")) // 1000, 900, 90, 4
// console.log(romanToInt("MCMXCIV")); // 1000, 900, 90, 4
console.log(romanToInt("IXVI")); // 1000, 900, 90, 4 IV VX
// 1000, 100, 1000, 10, 100, 1 , v
// "MCMXCIV"; /IX XV VI
