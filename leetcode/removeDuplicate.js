const removeDuplicates = (nums) => {
  for (let i = 0; i < nums.length; i++) {
    const current = nums[i];
    const next = nums[i + 1];

    if (next === current) {
      nums.splice(nums.indexOf(next), 1);
      return removeDuplicates(nums);
    }
  }
  return nums;
};

console.log(removeDuplicates([1, 1, 2]));
