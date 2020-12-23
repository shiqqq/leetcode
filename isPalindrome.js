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
// 法一：利用栈 
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

// 法二  利用快慢指针 可以利用少一点的空间阿
// 用快慢指针 定义到中点的位置， 奇数就是正中间 唯一的中点，偶数就是上中点
// 接下来 把右半部分加到栈里面去
