const nums = [1,1,2] // 2, nums = [1,2,_]
// const nums = [0,0,1,1,1,2,2,3,3,4] // 5, nums = [0,1,2,3,4,_,_,_,_,_]

// Нужно изменять напрямую nums и возвращать число уникальных чисел
var removeDuplicates = function(nums) {
    let lastNum = 0;
    const nonDuplicateArray = []
    for (let num of nums) {
        if (lastNum === num)
            continue;
        lastNum = num;
        nonDuplicateArray.push(num);
    }
    return {
        s: nonDuplicateArray.length,
        nonDuplicateArray
    };
};

module.exports = () => {
    return removeDuplicates(nums);
}