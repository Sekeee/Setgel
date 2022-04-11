// const searchInsert = (nums, target) => {
//   if (nums.length === 0 || target === 0) return 0;

//   if (nums.length % 2 === 0) {
//     const middle = nums[nums.length / 2];
//     if (middle === target) {
//       return nums.length / 2;
//     }
//     if (middle >= target) {
//       nums.splice(0, nums.length / 2);
//     } else {
//       nums.splice(nums.length / 2, nums.length / 2);
//     }
//   } else {
//     const middle = nums[(nums.length + 1) / 2];
//     if (middle === target) {
//       return nums.length / 2;
//     }
//     if (middle >= target) {
//       nums.splice(0, (nums.length + 1) / 2);
//     } else {
//       nums.splice((nums.length + 1) / 2, (nums.length + 1) / 2);
//     }
//   }
//   return searchInsert(nums, target);
// };

//
// const array = [1, 2, 3, 4, 5, 6];
// const middle = (array.length + 1) / 2;
// array.splice((array.length + 1) / 2, (array.length + 1) / 2);
// console.log(array);

const searchInsert = (nums, target) => {
  let left = 0;
  let right = nums.length;

  while (left < right) {
    const middle = Math.floor((left + right) / 2);

    if (nums[middle] < target) {
      left = middle + 1;
    } else {
      right = middle;
    }
  }
  return left;
};
console.log(searchInsert([1, 2, 3, 4, 5, 6], 3));
