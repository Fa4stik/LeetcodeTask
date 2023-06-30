// const n = 2 // 2
const n = 3 // 3
// const n = 7;

var climbStairs = function(n) {
    if (n <= 2)
        return n;
    let prev1 = 1, prev2 = 2;
    for (let i = 3; i <= n; i++) {
        let curr = prev1 + prev2;
        prev1 = prev2
        prev2 = curr;
    }
    return prev2
};

module.exports = () => {
    return climbStairs(n);
}