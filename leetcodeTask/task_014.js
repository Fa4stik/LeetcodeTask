/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} list1
 * @param {ListNode} list2
 * @return {ListNode}
 */
var mergeTwoLists = function(list1, list2) {
    let ls1 = list1, ls2 = list2;
    let dummy = new ListNode();
    let current = dummy;

    while (ls1 !== null && ls2 !== null) {
        if (ls1.val < ls2.val) {
            current.next = ls1;
            ls1 = ls1.next;
        } else {
            current.next = ls2;
            ls2 = ls2.next;
        }
        current = current.next;
    }

    if (ls1 !== null) {
        current.next = ls1;
    } else {
        current.next = ls2;
    }

    return dummy.next;
};

module.exports = () => {
    const list1 = [1,2,4], list2 = [1,3,4]
    // const list1 = [], list2 = []
    // const list1 = [], list2 = [0]
    return mergeTwoLists(list1, list2);
}