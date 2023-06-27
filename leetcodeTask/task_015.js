const nums = [3,2,2,3], val = 3
// const nums = [0,1,2,2,3,0,4,2], val = 2

// var removeElement = function(nums, val) {
//     let count = 0;
//     for (let i = 0; i < nums.length; i++) {
//         if (nums[i] === val) {
//             nums[i] = null;
//             continue
//         }
//         count++;
//     }
//     nums.sort((a, b) => b - a);
//     return count;
// };

// second solve

var removeElement = function(nums, val) {
    let id = 0;
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] !== val) {
            nums[id] = nums[i];
            id++;
        }
    }
    return id;
}

module.exports = () => {
    const result = removeElement(nums, val)
    console.log(nums)
    return result;
}