// const nums = [1,2,3,1]
// const nums = [1,2,3,4]
const nums = [1,1,1,3,3,4,3,2,4,2]

var containsDuplicate = function(nums) {
    nums.sort()
    for (let i = 1; i < nums.length; i++) {
        if (nums[i] === nums[i-1])
            return true;
    }
    return false;
};

module.exports = () => {
    return containsDuplicate(nums)
}