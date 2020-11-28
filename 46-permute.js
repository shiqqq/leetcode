
/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum = function (nums) {
    console.log(nums);
    let res = [];


    //先对这个数组进行排序    如何排序啊？？  这里直接使用数组的sort方法
    nums.sort(function (a, b) {
        return a - b;
    })
    console.log(nums);

    for (let i = 0; i < nums.length - 2; i++) {
        let target = [];//定义一个变量用于存放符合要求的一个三元组
        console.log('进入for')

        let start = i + 1;
        let end = nums.length - 1;
        while (start !== end) {
            let sum = nums[i] + nums[start] + nums[end];
            if (sum < 0) {
                start++;
            }
            if (sum > 0) {
                end--;
            }
            if (sum == 0) {
                target.push(nums[i]);
                target.push(nums[start]);
                target.push(nums[end]);
                console.log('找到一组啦' + nums[i] + '' + nums[start] + '' + nums[end])
                res.push([...target]);
                break;
            }
        }

    }



    return (res);

};