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

//借助两个指针 让他们间隔n+1 n1.next = n1.next.next
var removeNthFromEnd = function(head, n) {
    let dummy = new ListNode();
    dummy.next = head;
    let n1 = dummy;
    let n2 = dummy;

    for(let i = 0; i <= n; i++){
        n2 = n2.next;
    }

    while(n2 !== null){
        n1 = n1.next;
        n2 = n2.next;
    }

    n1.next = n1.next.next;

    return dummy.next;
   
};


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