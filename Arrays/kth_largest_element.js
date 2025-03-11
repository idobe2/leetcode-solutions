/**
 * Time Limit Exceeded
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var findKthLargest = function (nums, k) {
      let arr = new Array();
      let count = 0, maxValue, maxIndex;
  
      for (let i = 0; i < nums.length; i++) {
          arr.push(nums[i]);
      }
  
      while (count != k) {
          maxValue = Math.max(...arr);
          maxIndex = arr.indexOf(maxValue);
          arr[maxIndex] = -Infinity;
          count++;
      }
      
      return maxValue;
  };