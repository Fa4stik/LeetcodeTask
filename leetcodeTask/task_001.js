let nums = [2,7,11,15], target = 9
// let nums = [3,2,4], target = 6

var twoSum = function(nums, target) {
    for (let i = 0; i < nums.length; i++) {
        for (let j = i+1; j < nums.length; j++) {
            if (nums[i] + nums[j] === target)
                return [i, j]
        }
    }
};

console.log((twoSum(nums, target)))