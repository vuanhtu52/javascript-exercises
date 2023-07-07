const removeFromArray = function(arr, ...args) {
    for (let arg of args) {
        index = arr.indexOf(arg);
        if (index >= 0) {
            arr.splice(index, 1);
        }
    }
    return arr;
};

// Do not edit below this line
module.exports = removeFromArray;
