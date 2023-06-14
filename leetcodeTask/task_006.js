const x = 10 // true
// const x = -121 // false

// first solve
// var isPalindrome = function(x) {
//     if (x < 0)
//         return false
//     const length = Math.floor(Math.log10(x));
//     let left = Math.pow(10, length)
//     let right = 10;
//     let i = 0;
//     while (i <= length/2) {
//         const firstDigit = Math.floor(x/left)
//         const lastDigit = Math.floor((x%right)/Math.pow(10, i))
//         if (firstDigit !== lastDigit)
//             return false
//         x%=left;
//         left/=10;
//         right*=10;
//         i++;
//     }
//     return true;
// };

// second solve

// var isPalindrome = function(x) {
//     if (x < 0)
//         return false
//     x = x.toString()
//     let i = 0;
//     while (i < x.length/2) {
//         if (x[i] !== x[x.length-i-1])
//             return false
//         i++;
//     }
//     return true;
// }

// third solve

var isPalindrome = function(x) {
    if (x < 0 || x!=0 && x%10 === 0)
        return false
    let check = 0
    while (x > check) {
        check=Math.floor(check*10 + x%10);
        x=Math.floor(x/10);
    }
    return (check === x || x === Math.floor(check/10));
}

module.exports = () => {
    return isPalindrome(x);
}