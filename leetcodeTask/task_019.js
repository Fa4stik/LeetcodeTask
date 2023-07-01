const root = [4,2,6,1,3] // 1
// const root = [1,0,48,null,null,12,49] // 1

var getMinimumDifference = function(root) {
    let prev = null;
    let minDiff = Infinity;

    function checkNode(node) {
        if (node === null)
            return;
        checkNode(node.left);
        if (prev !== null)
            minDiff = Math.min(minDiff, node.val - prev)
        prev = node.val;
        checkNode(node.right);
    }

    checkNode(root);
};

module.exports = () => {
    return 1;
}