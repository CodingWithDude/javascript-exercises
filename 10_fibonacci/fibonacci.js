const fibonacci = function(input) {
    input = Number(input)
    fibArray = [1]
    let n1 = 0, n2 = 1, nextTerm
    if (input < 0) {
        return "OOPS"
    } else {
        for (let i = 1; i < input;i++){
            nextTerm = n1 + n2
            n1 = n2
            n2 = nextTerm
            fibArray.push(nextTerm)
        }
    }
    return fibArray.at(-1)

};

// Do not edit below this line
module.exports = fibonacci;
 