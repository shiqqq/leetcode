
/**
 * @param {number[]} nums
 * @return {number[][]}
 * 给定一个 没有重复 数字的序列，返回其所有可能的全排列。

 
 */

 // 法1: 传入dfs的两个参数 path used
 //布尔数组 used，初始化的时候都为 false 表示这些数还没有被选择，
 //当我们选定一个数的时候，就将这个数组的相应位置设置为 true ，
 //这样在考虑下一个位置的时候，就能够以 O(1)O(1) 的时间复杂度判断这个数是否被选择过，
 //这是一种「以空间换时间」的思想。


var permute = function(nums) {
    let res = [];
   
    let used = [];
    for(let i = 0; i < nums.length; i++){
        used[i] = false;
    } //能不用for循环，直接生成一个大小为nums.length, 值都为false都used数组吗？？
 dfs([], used);
    console.log(used);
    console.log(used[0]);
    function dfs(path, used){
        console.log('进入dfs..', path, used)
        //定义出口
        if(path.length == nums.length){
            res.push([...path]);
            console.log('确定一组了： ' + path);
            return;
        }
        //主体for循环
        for(let i = 0; i < nums.length; i++){
            //之前已经push到path里，就不用再加入了
            if(used[i] == false){
            path.push(nums[i]);
            used[i] = true;
            dfs(path, used);
            console.log('即将pop()');
            path.pop();
            used[i] = false;
            }      
        }
    }
    return res;
};

//法2: 传入dfs的两个参数 path  利用 path.includes(nums[i]) 
// 每次遍历判断一下 path是否已经加入过nums[i]，加入过就跳过该下标 continue
/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var permute = function(nums) {
    let res = [];
    dfs([]);
    function dfs(path){
        if(path.length == nums.length){
            res.push([...path]);
            return;
        }
        for(let i = 0; i < nums.length; i++){
            if(path.includes(nums[i])){
                continue;
            }
            path.push(nums[i]);
            dfs(path);
            path.pop();
        }
    }
    return res;

};