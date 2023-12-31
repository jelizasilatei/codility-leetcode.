// Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.
// You may assume that each input would have exactly one solution, and you may not use the same element twice.
// You can return the answer in any order.

 
// Example 1:

// Input: nums = [2,7,11,15], target = 9
// Output: [0,1]
// Explanation: Because nums[0] + nums[1] == 9, we return [0, 1].
// Example 2:
// Input: nums = [3,2,4], target = 6
// Output: [1,2]
// Example 3:
// Input: nums = [3,3], target = 6
// Output: [0,1]

function twoSum(nums, target) {
    for (let index = 0; index < nums.length; index++) {
        //target = 26
        //nums = [2,7,11,15]
        const diff = target - nums[index];//[24,19,15,11]
        const diffIndex = nums.indexOf(diff);//[nil(-1),nill(-1),3,2]
        //The .indexof returns -1 if an element is not found in the array.
        // "diffIndex !== index" takes care of same index not being reused
        if (diffIndex !== -1 && diffIndex !== index) {
            return [index, diffIndex];
        }
    }
};