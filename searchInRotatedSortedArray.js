// There is an integer array nums sorted in ascending order (with distinct values).
// Prior to being passed to your function, nums is possibly rotated at an unknown pivot index k (1 <= k < nums.length) such that the resulting array is [nums[k], nums[k+1], ..., nums[n-1], nums[0], nums[1], ..., nums[k-1]] (0-indexed). For example, [0,1,2,4,5,6,7] might be rotated at pivot index 3 and become [4,5,6,7,0,1,2].
// Given the array nums after the possible rotation and an integer target, return the index of target if it is in nums, or -1 if it is not in nums.
// You must write an algorithm with O(log n) runtime complexity.
 

// Example 1:
// Input: nums = [4,5,6,7,0,1,2], target = 0
// Output: 4

// Example 2:
// Input: nums = [4,5,6,7,0,1,2], target = 3
// Output: -1

// Example 3:
// Input: nums = [1], target = 0
// Output: -1

var search = function(nums, target) {
    // nums = [4,5,6,7,0,1,2]  , target = 0
    let left = 0;                         // Initialize the left pointer
    // left = 0 (4)
    //(second-loop) new-left = 4 (0)
    let right = nums.length - 1;          // Initialize the right pointer
    // right = 6 (2)
    //(third-loop) right = 4 (0)

    while (left <= right) {  // Perform binary search until left and right pointers meet
        //(0 <= 6) 
        //(second-loop) (4 <= 6)
        //(third-loop) (4 <= 4)
      let mid = Math.floor((left + right) / 2); // Calculate the middle index
      // mid = ((0 + 6)/2) == 3 (7)
      //(second-loop) new-mid = ((4 + 6)/2) == 5 (1)
      //(third-loop) new-mid = ((4 + 4)/2) == 4 (0)

      if (nums[mid] === target) {         // If the middle element is equal to the target, return the index
      // 7 === 0
      //(second-loop) 1 === 0
      //(third-loop) 0 === 0
        return mid;
        //(third-loop) return 4.
      }

      if (nums[left] <= nums[mid]) {      // If the left half is sorted
      // 4 <= 7  (left half is sorted)
      //(second-loop) 0 <= 1  (left half is sorted)
        if (nums[left] <= target && target < nums[mid]) {    // If the target lies in the left half
        // 4 <= 0 && 0 < 7
        //(second-loop) 0 <=0 && 0 < 1
          right = mid - 1;                 // Adjust the right pointer to search in the left half 
          //(second-loop) right = 5 -1 == 4 (0)
        } else {
          left = mid + 1;                  // Adjust the left pointer to search in the right half
          // left = 3 + 1 = 4  (0)
        }
      } else {                            // If the right half is sorted
        if (nums[mid] < target && target <= nums[right]) {   // If the target lies in the right half
          left = mid + 1;                  // Adjust the left pointer to search in the right half
        } else {
          right = mid - 1;                 // Adjust the right pointer to search in the left half
        }
      }
    }

    return -1; 
};