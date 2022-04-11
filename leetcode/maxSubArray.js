const maxSubArray = (nums) => {
  let sumArray = [];
  if (nums.length === 0) return 0;
  for (let i = 0; i < nums.length; i++) {
    let sum = nums[i];
    sumArray.push(sum);
    for (let j = 1; j < nums.length; j++) {
      sum = sum + nums[j];
      sumArray.push(sum);
      console.log(sumArray);
    }
  }
  return Math.max(...sumArray);
};

console.log(maxSubArray([5, 4, -1, 7, 8]));
