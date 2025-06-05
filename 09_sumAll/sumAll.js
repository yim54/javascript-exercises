const sumAll = function(a, b) {
    // check for non-integer parameters

    if (!(Number.isInteger(a)) || !(Number.isInteger(b))) {
        return "ERROR";
    }

    // check for negative numbers

    if (a < 0 || b < 0) {
        return "ERROR";
    }

    // swap a and b if b is larger

    if (a > b) {
        let temp = a;
        a = b;
        b = temp;
    }

    // sum

    let sum = 0;
    for (let i = a; i <= b; i++) {
        sum += i;
    }
    return sum;
};

// Do not edit below this line
module.exports = sumAll;
