/**
 * Not working
 * @param {number} target
 * @param {number[]} nums
 * @return {number}
 */
var minSubArrayLen = function (target, nums) {
    let sum = 0;
    let count = 0;
    for (let j = 0; j < 2; j++) {
        for (let i = j; i < nums.length; i++) {
            if (sum >= target) return count;
            if (nums[i] === target) return 1;
            if (nums[i] + nums[i + 1] < target) {
                sum += (nums[i] + nums[i + 1]);
                count += 1;
            }
            else {
                sum = 0;
                count = 0;
            }
        }
    }
    return count;
};