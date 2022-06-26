const removeFromArray = function(arr, ...args) {
    itemsToRemove = Array.from(args)
    for (let i = 0; i <= itemsToRemove.length; i++) {
        let myIndex = arr.indexOf(itemsToRemove[i])
        if (myIndex !== -1) {
            arr.splice(myIndex,1)
        }
    }
    return arr
};

// Do not edit below this line
module.exports = removeFromArray;
