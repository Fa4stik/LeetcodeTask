// const nums = [0,1,2,4,5,7] // ["0->2","4->5","7"]
// const nums = [0,2,3,4,6,8,9] // ["0","2->4","6","8->9"]
const nums = []

// var summaryRanges = function(nums) {
//     const exactlyArr = [];
//     let left = 0;
//
//     if (nums.length === 0)
//         return []
//
//     for (let i = 1; i < nums.length; i++) {
//         if (nums[i]-nums[i-1] !== 1) {
//             if (nums[i-1] === nums[left]) {
//                 exactlyArr.push(`${nums[left]}`)
//                 left = i;
//                 continue;
//             }
//             exactlyArr.push(`${nums[left]}->${nums[i-1]}`)
//             left = i;
//         }
//     }
//     if (nums[nums.length-1] !== nums[left]) {
//         exactlyArr.push(`${nums[left]}->${nums[nums.length-1]}`)
//     } else {
//         exactlyArr.push(`${nums[left]}`)
//     }
//     return exactlyArr;
// };

var summaryRanges = function(nums) {
    const ans = []
    for (let i = 0; i < nums.length; i++) {
        let j = i;
        while (j + 1 < nums.length && nums[j + 1] === nums[j] + 1) {
            j++
        }
        if (j > i) {
            ans.push(`${nums[i]}->${nums[j]}`)
        } else {
            ans.push(`${nums[i]}`)
        }
        i = j;
    }

    return ans;
}

module.exports = () => {
    return summaryRanges(nums);
}