/**
 * @param {number[]} nums
 * @return {number}
 * 
 * 找出数组中重复的数字。


在一个长度为 n 的数组 nums 里的所有数字都在 0～n-1 的范围内。
数组中某些数字是重复的，但不知道有几个数字重复了，也不知道每个数字重复了几次。
请找出数组中所有重复的数字。

 */
var findRepeatNumber = function(nums) {
    nums.sort((a, b) => {
        return a - b;
    })
    let set = new Set();
    for(let i = 0; i < nums.length; i++){
        if(nums[i] == nums[i + 1]){
            if(!set.has(nums[i])){
                console.log(nums[i])
                set.add(nums[i])
            }
        }
    }
        return set;

};