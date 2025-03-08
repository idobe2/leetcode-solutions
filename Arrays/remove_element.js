/**
 * @param {number[]} nums
 * @param {number} val
 * @return {number}
 */
var removeElement = function (nums, val) {
    let i = 0;
    let j = 0;
    let k = 0;
    let temp = 0;
    for (i = 0; i < nums.length; i++) {
        if (nums[i] == val) {
            // Search for the next place to replace with
            j = i;
            while (nums[j] == val && j < nums.length - 1) {
                j++;
            }
            temp = nums[j];
            nums[j] = nums[i];
            nums[i] = temp;
        }
    }
    for (i = 0; i < nums.length; i++) {
        // Count
        if (nums[i] != val) {
            k++;
        }
    }

    return k;
};