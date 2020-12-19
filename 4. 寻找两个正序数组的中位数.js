
/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 * 
 * 4. 寻找两个正序数组的中位数
 * 给定两个大小为 m 和 n 的正序（从小到大）数组 nums1 和 nums2。
 * 请你找出并返回这两个正序数组的中位数。

进阶：你能设计一个时间复杂度为 O(log (m+n)) 的算法解决此问题吗？

 */


 //法二 二分查找
 










//法1: 合并两个有序数组 然后返回合并后的nums的中位数
var findMedianSortedArrays = function (nums1, nums2) {
    let nums = [];
    let i = 0;
    let j = 0;
    while (i < nums1.length && j < nums2.length) {
        if (nums1[i] < nums2[j]) {
            nums.push(nums1[i]);
            i++;
        } else {
            nums.push(nums2[j]);
            j++;
        }
    }
    if (i < nums1.length) {
        for (i; i < nums1.length; i++) {
            nums.push(nums1[i]);
        }
    }
    if (j < nums2.length) {
        for (j; j < nums2.length; j++) {
            nums.push(nums2[j]);
        }
    }

    let len = nums.length;
    if (len % 2 == 1) {
        return nums[Math.floor(len / 2)];
    } else {
        return (nums[len / 2 - 1] + nums[len / 2]) / 2;
    }
};

