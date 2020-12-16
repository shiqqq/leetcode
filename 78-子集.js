/**
 * 给定一组不含重复元素的整数数组 nums，返回该数组所有可能的子集（幂集）。
 * 说明：解集不能包含重复的子集。

 * @param {number[]} nums
 * @return {number[][]}
 */

let nums = [1, 2, 3];
var subsets = function (nums) {
    let res = [];
    let path = [];
    dfs([], 0);
    //回溯法
    function dfs(path, idx) {
       //定义出口
        if (idx == nums.length + 1) {
            return;
        }
        res.push([...path]);
        //回溯
        dfs([...path, nums[idx]], idx + 1);
    }
};
subsets(nums);

