// const letters = ["c","f","j"], target = "a" // c
// const letters = ["c","f","j"], target = "c" // f
const letters = ["x","x","y","y"], target = "z" // x

// var nextGreatestLetter = function(letters, target) {
//     for (let char of letters) {
//         if (char > target)
//             return char
//     }
//     return letters[0];
// };

var nextGreatestLetter = function(letters, target) {
    let left = 0, right = letters.length - 1;
    while (left <= right) {
        let mid = Math.floor((left + right) / 2);
        if (letters[mid] <= target) {
            left = mid + 1;
        } else {
            right = mid - 1;
        }
    }
    return letters[left % letters.length]
}

module.exports = () => {
    return nextGreatestLetter(letters, target);
}