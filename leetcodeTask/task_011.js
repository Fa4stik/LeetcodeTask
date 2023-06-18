// const nums = [1,1,2] // 2, nums = [1,2,_]
const nums = [0,0,1,1,1,2,2,3,3,4] // 5, nums = [0,1,2,3,4,_,_,_,_,_]
// const nums = [1,2] // 2, nums = [1,2]

// lastNum = 0, i = 1
// nums[0] !== nums[1] ? nums[1] = null; i++
// nums[0] !== nums[2] ? nums[++lastNum] = nums[2]

// Нужно изменять напрямую nums и возвращать число уникальных чисел
var removeDuplicates = function(nums) {
    let lastNum = 0;
    for (let i = 1; i < nums.length; i++) {
        if (nums[lastNum] !== nums[i])
            nums[++lastNum] = nums[i]
    }
    return lastNum+1;
};

module.exports = () => {
    const value = removeDuplicates(nums);
    console.log(nums)
    return value
}