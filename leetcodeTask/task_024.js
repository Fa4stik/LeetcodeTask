/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} head
 * @return {boolean}
 */

const head = [3,2,0,-4], pos = 1 // true
// const head = [1,2], pos = 0 // true

var hasCycle = function(head) {
    if (!head)
        return false;

    let firstHead = head;
    let secondHead = head.next;

    while (secondHead && secondHead.next) {
        if (firstHead === secondHead)
            return true;
        firstHead = firstHead.next;
        secondHead = secondHead.next.next;
    }
    return false;
};

module.exports = () => {
    return hasCycle(head);
}

