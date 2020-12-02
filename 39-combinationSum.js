/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 * 
 * 给定一个无重复元素的数组 candidates 和一个目标数 target ，
 * 找出 candidates 中所有可以使数字和为 target 的组合。
 * candidates 中的数字可以无限制重复被选取。

 */



var combinationSum = function(candidates, target) {
    let res = [];
    dfs(target, [], 0);
    function dfs(target, path, idx){
        console.log('进入dfs咯..', 'path:',path, '当前的index：', idx, '当前对应值：', candidates[idx] )
        //定义出口
        if(idx == candidates.length ){
            console.log('当前dfs结束啦 退出退出', path);
            return;
        }
        if(target == 0){
            console.log('找到目标组合了，留下这个:  ', path);
            res.push([...path]); //找到目标组合了，留下这个
            return;
        }
        //下一行是重点「回溯」 注意分两类： 使用当前index 和 跳过当前index 
        //1.使用当前index 此时path里面已有的组合数还小于目标值
        if((target - candidates[idx]) >= 0){
            console.log(target,candidates[idx], path, '可以加入path',);
            dfs(target - candidates[idx], [...path, candidates[idx]], idx);
        }
        //2.跳过当前index 此时path里面已有的组合数还大于目标值
        dfs(target, [...path], idx + 1);
    }
    console.log('combinationSum函数结束，看看输出结果', res);
}
let candidates = [2,3,6,7];
let target = 7;
combinationSum(candidates, target);

// var combinationSum = function(candidates, target) {
    
//     console.log(candidates);
//     console.log( 'target:    ' + target);

//     // candidates.sort(function(a,b){
//     //     return a - b;
//     // })
//     // console.log(candidates);

//     let res = []; //存放所有情况 最后返回
//     let path = []; // 每一次成功的情况
//     dfs([], 0);
//     function dfs(path, index){
//         console.log('进入dfs path为: ' + path);
//         let sum = 0;
//         for(let j = 0; j < path.length; j++){
//                sum += path[j];
//            }
//         if(sum > target){
//             console.log('sum>target 从此dfs出来')
//             index++;
//             console.log('看看那index有没有加1        ' + index);
//                return;
              
//            }
//         else if(sum == target){
//             console.log('sum == target 从此dfs出来')
//                res.push([...path]);
//                console.log('新加入一组哦');
//                console.log(res);
//                index++;
//                console.log('看看那index有没有加1        ' + index);
//                return;
//            }

//        for(let i = index; i < candidates.length; i++){
//            console.log('index: ' + index );
//            console.log('i: ' + i);
//            path.push(candidates[i]);
//            console.log('path里面新加入一个数，目前path为：   ' + path)
//            dfs(path, index);
//            console.log('path里面将要pop出来一个数')
//            path.pop(); 
//            console.log('目前path为：   ' + path);
//        } 
      
//     }

//     console.log(' 该函数结束了 最后最后返回res ++++++++')
//     console.log(res);
//     return res;
// };
    