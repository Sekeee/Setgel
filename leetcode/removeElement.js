const removeElement = (nums, val) => {
  for (let i = 0; i < nums.length; i++) {
    console.log(i, "===", nums[i], val);
    if (nums[i] === val) {
      nums.splice(i, 1);
      return removeElement(nums, val);
    }
  }
  return nums;
};

console.log(removeElement([1, 1, 2, 3, 4, 5], 3));

const array = [1, 2, 3, 4, 5];
array.splice(2, 1);
console.log(array);
