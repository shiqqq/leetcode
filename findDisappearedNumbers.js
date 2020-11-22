var nums = [];
nums.push(5);
nums.push(1);
nums.push(2);
nums.push(2);
nums.push(1);

console.log(nums);


// var findDisappearedNumbers = function(nums) {
//     console.log('进入函数了～～')
//     let len = nums.length; 
//     let temp = [];
//     for(let i = 1; i <= len; i++){
//         temp.push(i);
//     }

//     for(let t = 0; t < len; t++){
//         console.log('进入while');
//         let num = nums.pop();
//         console.log(num);
//         console.log(nums);
//         for(let i = 0; i < temp.length; i++){
//             console.log('进入for');
//             if(temp[i] == num){
//                 temp.splice(i, 1); //不应该是pop阿
//                 console.log(temp);
//                 continue;
//             }
//         }
//     }
//     console.log('结束了 看看temp：');
//     console.log(temp);
//     return temp;
// };

// findDisappearedNumbers(nums);

//上面方法开辟了新的数组
/*
范围在  1 ≤ a[i] ≤ n ( n = 数组大小 ) 的 整型数组，
从头到尾遍历，出现数字几，就将对应index置为负数，之后输出所有为正数的值的下标即可
*/

var findDisappearedNumbers = function(nums) {
    for(let i = 0; i < nums.length; i++){
        console.log('go in to for..')
        let index = Math.abs(nums[i]) - 1;
        console.log('index:' + index);

        if(nums[index] > 0){
            nums[index] = -nums[index];
            console.log('该位置未负数，不用管具体是几，关注其位置就好' + nums[index]);
        }
    }
    let temp = [];
    for(let i = 0; i < nums.length; i++){
        if(nums[i] > 0){
            temp.push(i+1);
        }
    }
    console.log('看看temp：'+ temp);
    return temp;

};
findDisappearedNumbers(nums);