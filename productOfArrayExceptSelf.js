// Given an integer array nums, return an array answer such that answer[i] is equal to the product of all the elements of nums except nums[i].
// The product of any prefix or suffix of nums is guaranteed to fit in a 32-bit integer.
// You must write an algorithm that runs in O(n) time and without using the division operation.


// Example 1:
// Input: nums = [1,2,3,4]
// Output: [24,12,8,6]

// Example 2:
// Input: nums = [-1,1,0,-3,3]
// Output: [0,0,9,0,0]

var productExceptSelf = function(nums) {
    const n = nums.length;
    const prefix = new Array(n);
    prefix[0] = 1;
  
    // Calculate prefix products
    for (let i = 1; i < n; i++) {
      prefix[i] = prefix[i - 1] * nums[i - 1];
    }
  
    let suffixProduct = 1;
    const answer = [];
  
    // Calculate suffix products and final result
    for (let i = n - 1; i >= 0; i--) {
      answer[i] = prefix[i] * suffixProduct;
      suffixProduct *= nums[i];
    }
  
    return answer;
};