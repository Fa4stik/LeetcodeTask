// const nums1 = [1,2,3,0,0,0], m = 3, nums2 = [2,5,6], n = 3
// const nums1 = [1], m = 1, nums2 = [], n = 0
// const nums1 = [0], m = 0, nums2 = [1], n = 1
const nums1 =
    [-10,-10,-9,-9,-9,-8,-8,-7,-7,-7,-6,-6,-6,-6,
        -6,-6,-6,-5,-5,-5,-4,-4,-4,-3,-3,-2,-2,-1,-1,
        0,1,1,1,2,2,2,3,3,3,4,5,5,6,6,6,6,7,7,7,7,8,
        9,9,9,9,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,
        0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,
        0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,
        0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,
        0,0,0,0,0,0,0,0,0,0,0,0,0,0,0], m = 55,
    nums2 =
        [-10,-10,-9,-9,-9,-9,-8,-8,-8,-8,-8,-7,-7,-7,
            -7,-7,-7,-7,-7,-6,-6,-6,-6,-5,-5,-5,-5,-5,
            -4,-4,-4,-4,-4,-3,-3,-3,-2,-2,-2,-2,-2,-2,
            -2,-1,-1,-1,0,0,0,0,0,1,1,1,2,2,2,2,2,2,2,
            2,3,3,3,3,4,4,4,4,4,4,4,5,5,5,5,5,5,6,6,6,
            6,6,7,7,7,7,7,7,7,8,8,8,8,9,9,9,9], n = 99

var merge = function(nums1, m, nums2, n) {
    while (n!==0) {
        nums1[m+n-1]=nums2[--n];
    }
    nums1.sort((a, b) => a-b)
};

module.exports = () => {
    merge(nums1, m, nums2, n);
    console.log(nums1)
    // return merge(nums1, m, nums2, n);
    return 1;
}