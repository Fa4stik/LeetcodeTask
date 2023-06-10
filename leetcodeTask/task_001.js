// let nums = [2,7,11,15], target = 9
let nums = [3,2,4], target = 6

var twoSum = function(nums, target) {
    const hashTable = {}
    for (let i = 0; i < nums.length; i++) {
        let diff = target - nums[i];
        if (diff in hashTable) {
            return [hashTable[diff], i]
        }
        hashTable[nums[i]] = i;
    }
    return [];
};

module.exports = () => {
    return twoSum(nums, target);
}