/**
 * @param {number[]} nums
 * @return {number}
 * 给定一个非空整数数组，除了某个元素只出现一次以外，
 * 其余每个元素均出现两次。找出那个只出现了一次的元素。
 */

//法1： 排序 + 栈 
//开辟了额外的空间

var singleNumber = function(nums) {
   nums.sort((a,b)=>{
       return a - b 
   })
   let stack = [];
   for(let i = 0; i < nums.length; i++){
       if(stack.includes(nums[i])){
           stack.pop();
       }else{
           stack.push(nums[i]);
       }
   }
   return stack.pop();
};

// 异或 位运算
/*
如果a、b两个值不相同，则异或结果为1。 
如果a、b两个值相同，异或结果为0。 
异或也叫半加运算，其运算法则相当于不带进位的二进制加法：
二进制下用1表示真，0表示假，
则异或的运算法则为：0⊕0=0，1⊕0=1，0⊕1=1，1⊕1=0（同为0，异为1），
这些法则与加法是相同的，只是不带进位，所以异或常被认作不进位加法。
*/

var singleNumber = function(nums) {
    let res = nums[0];
    for(let i = 1; i < nums.length; i++){
        res = res ^ nums[i];
    }
    return res;
};