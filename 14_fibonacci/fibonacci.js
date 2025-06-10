const fibonacci = function(num) {
    // convert strings to number

    num = Number(num);
    if (num == NaN) {
        return "OOPS";
    }

    // check for negative number

    if (num < 0) {
        return "OOPS";
    }

    if (num == 0) {
        return 0;
    }

    // get fib number

    let num1 = 1;
    let num2 = 1;
    for (let i = 2; i < num; i++) {
        let next = num1 + num2;
        num1 = num2;
        num2 = next;
    }
    return num2;
};

// Do not edit below this line
module.exports = fibonacci;
