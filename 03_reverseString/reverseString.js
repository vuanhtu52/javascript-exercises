const reverseString = function(string) {
    let stringReverse = "";
    for (let i = string.length; i >= 0; i--) {
        stringReverse += string.charAt(i);
    }
    return stringReverse;
};

// Do not edit below this line
module.exports = reverseString;
