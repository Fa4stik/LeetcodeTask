// const arr = [3,5,1] // true
const arr = [1,2,4] // false

// 1 3 5 7 9

var canMakeArithmeticProgression = function(arr) {
    arr.sort((a, b) => b-a);
    let store = arr[1] - arr[0];
    for (let i = 1; i < arr.length-1; i++) {
        if (arr[i+1] - arr[i] !== store)
            return false
    }
    return true;
};

module.exports = () => {
    return canMakeArithmeticProgression(arr);
}