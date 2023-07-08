// const nums = [1,3,5,6], target = 5 // 2
// const nums = [1,3,5,6], target = 2 // 1
const nums = [1,3,5,6], target = 7 // 4

var searchInsert = function(nums, target) {
    let left = 0, right = nums.length - 1;

    while (left <= right) {
        let md = Math.floor( left + (right - left) / 2);

        if (nums[md] === target) {
            return md;
        } else if (nums[md] < target) {
            left = md + 1;
        } else {
            right = md - 1;
        }
    }

    return left;
};

module.exports = () => {
    return searchInsert(nums, target);
}