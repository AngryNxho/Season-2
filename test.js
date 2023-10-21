function test(value) {
    let c = 2;
    for (let x = 0; x < value; x++){
        c+= 3
    }
    return c;
}

console.log(test(13));