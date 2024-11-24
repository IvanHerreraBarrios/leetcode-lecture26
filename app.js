var minOperations = function(n) {
    const square = (n % 2 === 0) ? (n * n) / 4 : (n * n - 1) / 4
    return square
};

//solution 2

var minOperations = function(n) {
    /*
    const square = (n % 2 === 0) ? (n * n) / 4 : (n * n - 1) / 4
    return square
    */

    let num = 0
    const length = n%2 === 0 ? n/2 : (n+1)/2
    for(let i=0; i < length; i++){
        const val = (2 * i) + 1
        num += n - val
    }
    return num
};