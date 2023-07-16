const fibonacci = function(index) {
    index = parseInt(index);
    if (index < 0) {
        return "OOPS";
    }
    if (index === 1 || index === 2) {
        return 1;
    }
    let num1 = 1;
    let num2 = 1;
    let result;
    for (let i = 3; i <= index; i++) {
        result = num1 + num2;
        num1 = num2;
        num2 = result;
    }
    return result;
};

// Do not edit below this line
module.exports = fibonacci;
