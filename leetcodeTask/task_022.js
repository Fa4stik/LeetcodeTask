const nums = [3,2,3] // 3
// const nums = [2,2,1,1,1,2,2] // 2

// var majorityElement = function(nums) {
//     nums.sort((a, b) => a - b)
//     return nums[Math.floor(nums.length / 2)];
// }

var majorityElement = function(nums) {
    let candidate = null, count = 0;
    for (let num of nums) {
        if (count === 0)
            candidate = num;
        count += candidate === num ? 1 : -1
    }
    return candidate;
};

module.exports = () => {
    return majorityElement(nums);
}