/**
 * @param {number} n
 * @return {number}
 * 
 * 第一次解答的时候 发现规律了，由于一次只能爬一个或两个楼梯嘛，递归的思想|动态规划
 * 代码不太知道怎么实现
 */


var climbStairs = function(n) {
    let stairs = [];
    stairs[1] = 1;
    stairs[2] = 2;
    for(let i = 3; i <= n; i ++){
        stairs[i] = stairs[i-2] + stairs[i-1];
        console.log(stairs[i])
    }
    return stairs[n];

};




//var climbStairs = function(n) {

    // let num_1 = n - 1;
    
    // if(n == 2 || n == 3){
    //     let num_2 = 0;
    // }
    // else{
    //     let num_2 = (n-1).num_2 + (n-2).num_1;
    //     console.log(num_2);
    //     return  num_2;
    // }
    
    // let sum = n + num_2;
    // return sum;

//};