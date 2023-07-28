 console.log(process.argv);

function getValue(parameter){

    // i will give us the index of the parameter
    const i = process.argv.indexOf(parameter);
    
    return process.argv[i + 1];    
}


console.log(getValue('install'));
console.log(getValue('-D'));