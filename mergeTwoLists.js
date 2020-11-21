/**
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

//=====第二次提交 代码简化了很多～～
var mergeTwoLists = function (l1, l2) {
    let dummy = new ListNode(); //先设置一个哨兵结点
    let curr = dummy; //先指向当前结点

    //开始分别从两个链表里取值进行比较
    while (l1 !== null && l2 !== null) {
        if (l1.val <= l2.val) {
            curr.next = l1;
            l1 = l1.next;
        }
        else {
            curr.next = l2;
            l2 = l2.next;
        }
        curr = curr.next;
    }

    if (l1 !== null) {
        curr.next = l1;
    }
    if (l2 !== null) {
        curr.next = l2;
    }
    return dummy.next;
};






var mergeTwoLists = function (l1, l2) {
    let dummy = new ListNode(); //先设置一个哨兵结点
    let curr = dummy; //先指向当前结点

    //开始分别从两个链表里取值进行比较
    while (l1 !== null || l2 !== null) {
        console.log('进入while');
        if (l1 !== null && l2 !== null) {
            val1 = l1.val;
            console.log('val1:' + val1);
            val2 = l2.val;
            console.log('val2:' + val2);

            if (val1 <= val2) {
                curr.next = new ListNode(val1);
                curr = curr.next;
                l1 = l1.next;
            }
            else {
                curr.next = new ListNode(val2);
                curr = curr.next;
                l2 = l2.next;
            }
            console.log('当前结点：')
            console.log(curr);
        }

        else {
            if (l1 == null && l2 !== null) {
                console.log('l1 == null && l2 !== null');
                val2 = l2.val;
                curr.next = new ListNode(val2);
                curr = curr.next;
                console.log('当前结点：')
                console.log(curr);
                l2 = l2.next;
            }
            if (l1 !== null && l2 == null) {
                console.log('l1 == null && l2 !== null');
                val1 = l1.val;
                curr.next = new ListNode(val1);
                curr = curr.next;
                console.log('当前结点：')
                console.log(curr);
                l1 = l1.next;
            }
            // if (l1 == null && l2 == null) {
            //     console.log('l1 == null && l2 == null 即两个链表都遍历完了');
            //     break;
            // }
            //就多余 画蛇添足阿
        }
    }
    return dummy.next;
};

//上面是第一次提交 用时比较长！