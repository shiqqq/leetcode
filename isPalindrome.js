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
var isPalindrome = function(head) {
    let stack = [];
    
    while(head !== null){
        stack.push(head.val);
        head = head.next;
    }
    let length = stack.length;
    let len = Math.floor((stack.length)/2);
    
    for(let i = 1; i<=len; i++){
        if(stack[i-1] !== stack[length-i]){
            return false;
        }
    }
    return true;
};