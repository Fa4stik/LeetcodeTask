// const head = [1,0,1]
// const head = [0]
// const head = [1,0,0,1,0,0,1,1,1,0,0,0,0,0,0]

/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 * */

var getDecimalValue = function(head) {
    let decimalNumber = 0, currentNode = head;
    while (currentNode) {
        decimalNumber += currentNode.val;
        decimalNumber*=2;
        currentNode = currentNode.next;
    }
    return decimalNumber/2;
};

module.exports = () => {
    return getDecimalValue(head);
}