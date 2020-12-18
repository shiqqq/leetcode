/**
 * @param {number[]} nums
 * @return {number}
 * 287. 寻找重复数
 * 给定一个包含 n + 1 个整数的数组 nums，其数字都在 1 到 n 之间（包括 1 和 n），
 * 可知至少存在一个重复的整数。假设只有一个重复的整数，找出这个重复的数。

说明：
不能更改原数组（假设数组是只读的）。
只能使用额外的 O(1) 的空间。
时间复杂度小于 O(n2) 。
数组中只有一个重复的数字，但它可能不止重复出现一次。
 */
var findDuplicate = function(nums) {
    let n = nums.length;
    for(let i = 0; i < n; i++){
        let temp = nums.pop();
        if(nums.includes(temp)){
            return temp;
        }
    }

};