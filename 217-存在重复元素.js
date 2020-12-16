/**
 * @param {number[]} nums
 * @return {boolean}
 * 
给定一个整数数组，判断是否存在重复元素。
如果任意一值在数组中出现至少两次，
函数返回 true 。如果数组中g每个元素都不相同，则返回 false 。
 */

 //法1: 利用set集合
var containsDuplicate = function(nums) {
    const set = new Set();
    for(let i = 0; i < nums.length; i++){
        if(set.has(nums[i])){
            return true;
        }
        set.add(nums[i]);
    }
    return false;
 };

 //法2: 先排序 再比较相邻两个元素是否相等
 var containsDuplicate = function(nums) {
    nums.sort((a, b) => {
        return a - b
    })
 
    for(let i = 0; i < nums.length - 1; i++){
        if(nums[i] == nums[i + 1]){
            return true
        }
    }
    return false
 };

 //法3: 利用 pop()后，原数组数量减少
 var containsDuplicate = function(nums) {
    for(let i = nums.length - 1; i > 0 ; i--){
        let temp = nums[i];
        nums.pop();
        if(nums.includes(temp)){
            return true
        }
    }
    return false
};