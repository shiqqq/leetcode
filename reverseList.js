/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var reverseList = function(head) {
    let dummy = new ListNode();
    let curr = dummy;
    let stack = [];//用一个stack数组存 栈的特性 先进后出

    while(head !== null){
        val = head.val;
        stack.push(val);
        head = head.next;
    }
     let length = stack.length;
     //不能直接用这个stack.length 因为stack每次pop出来一个值，stack.length就会减1
    for(let i = 0; i < length; i++){
        curr.next = new ListNode(stack.pop());
        curr = curr.next;
    }
    return dummy.next;
    
};