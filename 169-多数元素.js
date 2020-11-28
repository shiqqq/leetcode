/**
 * 给定一个大小为 n 的数组，找到其中的多数元素。
 * 多数元素是指在数组中出现次数大于 ⌊ n/2 ⌋ 的元素。
 * 你可以假设数组是非空的，并且给定的数组总是存在多数元素。


法1: 摩尔投票法（对拼消耗法）

法2: 建立hash数组 

法3: 对这一批数进行排序，然后输出中间位置的数一定是众数


 * @param {number[]} nums
 * @return {number}
 */
//

//方法1
var majorityElement = function(nums) {
     let target = nums[0];
     let count = 0;
     for(let i = 1; i < nums.length; i++){
         if(nums[i] == target){
             count++;
         }else{
             count--;
         }
         if(count < 0){
             target = nums[i];
             count = 0;
         }
     }
     return target;
};

//法2
var majorityElement = function(nums) {
    nums.sort((a,b) =>{
        return a - b;
    })
console.log(nums);
    let k = Math.floor(nums.length / 2);
    return nums[k];
};