/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */



var combinationSum = function(candidates, target) {
    
    console.log(candidates);
    console.log( 'target:    ' + target);

    // candidates.sort(function(a,b){
    //     return a - b;
    // })
    // console.log(candidates);

    let res = []; //存放所有情况 最后返回
    let path = []; // 每一次成功的情况
    dfs([], 0);
    function dfs(path, index){
        console.log('进入dfs path为: ' + path);
        let sum = 0;
        for(let j = 0; j < path.length; j++){
               sum += path[j];
           }
        if(sum > target){
            console.log('sum>target 从此dfs出来')
            index++;
            console.log('看看那index有没有加1        ' + index);
               return;
              
           }
        else if(sum == target){
            console.log('sum == target 从此dfs出来')
               res.push([...path]);
               console.log('新加入一组哦');
               console.log(res);
               index++;
               console.log('看看那index有没有加1        ' + index);
               return;
           }

       for(let i = index; i < candidates.length; i++){
           console.log('index: ' + index );
           console.log('i: ' + i);
           path.push(candidates[i]);
           console.log('path里面新加入一个数，目前path为：   ' + path)
           dfs(path, index);
           console.log('path里面将要pop出来一个数')
           path.pop(); 
           console.log('目前path为：   ' + path);
       } 
      
    }

    console.log(' 该函数结束了 最后最后返回res ++++++++')
    console.log(res);
    return res;
};
    let candidates = [2,3,6,7];
    let target = 7;
    combinationSum(candidates, target);