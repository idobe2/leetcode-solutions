/**
 * @param {number[]} nums1
 * @param {number} m
 * @param {number[]} nums2
 * @param {number} n
 * @return {void} Do not return anything, modify nums1 in-place instead.
 */
var merge = function (nums1, m, nums2, n) {
  let j = 0;
  for (let i = m; i < m + n; i++) {
    nums1[i] = nums2[j];
    j++;
  }
  let temp = 0;
  for (i = 0; i < m + n; i++) {
    for (j = 0; j < m + n; j++) {
      if (i != j) {
        if (nums1[i] < nums1[j]) {
          temp = nums1[j];
          nums1[j] = nums1[i];
          nums1[i] = temp;
        }
      }
    }
  }
};
