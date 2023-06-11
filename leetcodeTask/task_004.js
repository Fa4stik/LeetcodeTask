const prices = [7,1,5,3,6,4]
// const prices = [7,6,4,3,1]

var maxProfit = function(prices) {
    let max = 0;
    let left = prices[0];
    for (let i = 1; i < prices.length; i++) {
        if (prices[i] < left) {
            left = prices[i];
        } else {
            if (prices[i] - left > max) {
                max = prices[i] - left;
            }
        }
    }
    return max;
};

module.exports = () => {
    return maxProfit(prices);
}