/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} n
 * @return {ListNode}
 */
var removeNthFromEnd = function(head, n) {
    //借助数组
    let stack = [];
    let dummy = new ListNode();
    let curr = dummy;

    while(head !== null){
        stack.push(head.val);
        head = head.next;
    }
    let len = stack.length;
    for(let i = 0; i < len; i++){
        let except =  len - n;
        if(i !== except){
            curr.next = new ListNode(stack[i]);
            curr = curr.next;
        }
    }
    return dummy.next;
};