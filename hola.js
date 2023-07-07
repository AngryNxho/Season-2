let a = [2, 8];
let b = [8, 2];
let total = [];

for (let x = 0; x < a.length; x++) {
  op = a[x] + b[x];
  if (op <= 9 && op >= 0) {
    total.push(op);
  } else {
  }
}

console.log(total);
