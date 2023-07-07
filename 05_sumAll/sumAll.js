const sumAll = function(num1, num2) {
    let sum = 0;
    let min;
    let max;
    // Return ERROR with non-number params
    if (typeof(num1) !== "number" || typeof(num2) !== "number") {
        return "ERROR";
    }
    // Return ERROR with negative numbers
    if (num1 < 0 || num2 < 0) {
        return "ERROR";
    }
    // Check which number is smaller/larger
    if (num1 <= num2) {
        min = num1;
        max = num2;
    } else {
        min = num2;
        max = num1;
    }
    for (let i = min; i <= max; i++) {
        sum += i;
    }
    return sum;
};

// Do not edit below this line
module.exports = sumAll;
