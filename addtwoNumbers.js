/**
 * 
 * 给出两个 非空 的链表用来表示两个非负的整数。
 * 其中，它们各自的位数是按照 逆序 的方式存储的，
 * 并且它们的每个节点只能存储 一位 数字。
 * 如果，我们将这两个数相加起来，则会返回一个新的链表来表示它们的和。
 * 您可以假设除了数字 0 之外，这两个数都不会以 0 开头。

 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var addTwoNumbers = function(l1, l2) {
    let dummy = new ListNode();
    let curr = dummy;
    let carry = 0;

    while(l1 !== null || l2 != null || carry )
    {
        let sum = 0;
        if(l1 !== null){
            sum += l1.val;
            l1 = l1.next;
        }
        if(l2 !== null){
            sum += l2.val;
            l2 = l2.next;
        }
        sum += carry;
        carry = Math.floor(sum / 10);
        curr.next = new ListNode(sum % 10);
        curr = curr.next;
    }
    return dummy.next;
    
};








// var addTwoNumbers = function (l1, l2) {
//     //先定义几个基本量

//     let dummy = new NodeList(); //哨兵节点
//     let curr = dummy; //当前结点先指向dummy
//     let carry = 0; //用来进位
    
//     while(l1 !== null || l2 !== null){
//         let sum = 0;
//         if(l1 !== null ){
//             val1 = l1.val;
//             l1 = l1.next; //l1要进一位，要不然只读当前这一个值
//         }
//         if(l1){
//             val2 = l2.val;
//             l2 = l2.next;
//         }

//         sum = (val1 + val2 + carry) % 10;
//         carry = math.floor((val1 + val2 + carry) / 10);
//         // 现在就可以新生成一个结点 存放这个值
//         curr.next = new NodeList(sum);
//         //然后 curr 挪到这个新生成的结点上，为下一次再串一个结点做准备
//         curr = curr.next;
//     }

    
// };