/**
 * 给定一组不含重复元素的整数数组 nums，返回该数组所有可能的子集（幂集）。
 * 说明：解集不能包含重复的子集。

 * @param {number[]} nums
 * @return {number[][]}
 * 
 */

 /**
 * @param {number[]} nums
 * @return {number[][]}
 */
var subsets = function(nums) {
    console.log(`nums ${nums}`);
    let ans = [];
    let path = [];
    process(nums, 0, ans, path);
    console.log('ans: ', ans);
    return ans;
};
function process(nums, index, ans, path){
    console.log('调用函数')
        let len = nums.length;
        if(index == len){
            console.log(`该路径已走到底，path: ${path}`);
            ans.push([...path]);
            return;
        }
        
        //index来到的位置 要or不要
        process(nums, index + 1, ans,[...path,nums[index]]);
        console.log(`=======`)
        process(nums, index + 1, ans,[...path]);
    };

    subsets([1,2,3])



// console.log(`${0 == "0"}`)
// console.log(`${0 == []}`);
// console.log(`${"0" == []}`);

