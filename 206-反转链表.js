/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * 描述：反转一个单链表。
 * @param {ListNode} head
 * @return {ListNode}
 */

 //法1:借助栈 先进后出 
 //分析：会新开辟一个数组stack[]，空间复杂度多O(n)
var reverseList = function(head) {
    let dummy = new ListNode();
    let curr = dummy;
    let stack = [];
    while(head !== null){
        stack.push(head.val);
        head = head.next;
    }
    console.log(stack);
    let len = stack.length;
    for(let i = 0; i < len; i++){
        curr.next = new ListNode(stack.pop());
        curr = curr.next;
    }
    return dummy.next;

};

//法2：  定义指针  prev curr next
var reverseList = function(head) {
    //定义三个指针
    let prev = null;
    let curr = head;
    let next = head;

    while(next !== null){
        next = curr.next;
        curr.next = prev;
        prev = curr;
        curr = next;
    }
    return prev;
};

//法2优化 利用es6新特性 解构赋值 
var reverseList = function(head) {
    //定义三个指针
    let prev = null;
    let curr = head;
    let next = head;

    while(next !== null){
        [curr.next,prev, next] = [prev, curr, curr.next];
    }
    return prev;
};
