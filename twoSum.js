/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 * 
 * 1. 暴力法，两层循环变量
 *      时间复杂度：O(n^2)
 * 
 * 2. 利用 HashMap 减少查询时间
在暴力法中，内层循环查找差值很浪费时间，那么如何减少查询时间呢？利用 HashMapHashMap 就可以减少查询时间。
使用一层循环，每遍历到一个元素就计算该元素与 target 之间的差值，然后到 HashMap 中寻找该差值，如果找到，则返回两个元素在数组 nums的下标，如果没有找到，则将当前元素存入 HashMap中 (Key: nums[i], Value: i) 。
时间复杂度：O(n)
 */


//todo 利用map方法

















// var twoSum = function (nums, target) {
//     var indexs = [];
//     console.log('222indexs');
//     console.log(indexs);
//     console.log(nums.length);
//     for (var i = 0; i < nums.length - 1; i++) {
//         console.log('333进入for循环了，现在打印i');
//         console.log(i);

//         var j = i + 1;
//         for (j; j < nums.length; j++) {
//             console.log('现在打印j');
//             console.log(j);
//             if (nums[i] + nums[j] == target) {
//                 indexs.push(i);
//                 indexs.push(j);
//                 console.log('indexs');
//                 console.log(indexs);
//                 return indexs;
//             }
//         }
//     }
// };
// console.log('111程序开始了');

// twoSum([2, 7, 11, 15], 26)


// var twoSum = function (nums, target) {
//     console.log(nums.length);
//     console.log(target);
//     //直接for循环走起，不用事先定义一个数组变量了
//     for (var i = 0; i < nums.length - 1; i++) {

//         for (var j = i + 1; j < nums.length; j++) {
//             console.log('看看j：' + j);
//             if (nums[i] + nums[j] == target) {
//                 console.log([i, j]);
//                 return [i, j];
//             }
//         }
//     }
// }
// console.log('111程序开始了');
// twoSum([2, 7, 11, 15], 26)
