// const s = "A man, a plan, a canal: Panama" // true
// const s = "race a car" // false
// const s = " " // true
// const s = "0P";
const s = "ab2a";

var isPalindrome = function(s) {
    let right = s.length - 1;
    let left = 0;

    while (left < right) {
        if (s[left].toLowerCase() === s[left].toUpperCase()
            && isNaN(s[left] - parseFloat(s[left]))) {
            left++;
            continue;
        }
        if (s[right].toLowerCase() === s[right].toUpperCase()
            && isNaN(s[right] - parseFloat(s[right]))) {
            right--;
            continue;
        }
        if (s[left].toUpperCase() !== s[right].toUpperCase())
            return false;
        right--;
        left++
    }
    return true;
};

module.exports = () => {
    return isPalindrome(s);
}