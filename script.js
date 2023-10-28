let someValue = "value from outer scope";

function innerFunction(parameter) {
    console.log("Parameter received:", parameter);
}

function outerFunction() {
    innerFunction(someValue);
}

outerFunction();  // logs: Parameter received: value from outer scope
