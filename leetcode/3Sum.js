const threeSum = (numbers) => {
  const isPositive = [];
  const isNegative = [];
  const answer = [];

  numbers.sort((a, b) => a - b);
  numbers.forEach((element, index) => {
    element <= 0 ? isNegative.push(element) : isPositive.push(element);
  });

  for (
    let i = 0, j = isNegative.length - 1;
    i < isPositive.length - 1, j >= 0;

  ) {
    if (isPositive[i] > -isNegative[j]) {
      const delta = isPositive[i] + isNegative[j];
      const thirdNumber = isNegative.find((el) => delta);
      answer.push([isPositive[i], isNegative[i], thirdNumber]);
      console.log(isPositive);
      j--;
    } else {
      const delta = isNegative[j] + isPositive[i];
      const thirdNumber = isPositive.find((el) => delta);
      answer.push([isPositive[i], isNegative[j], thirdNumber]);
      console.log(isNegative);
      i++;
    }
  }
  console.log("positive = ", isPositive, "negative = ", isNegative);
  return answer;
};

console.log(threeSum([-1, 0, 1, -2, 2, 0]));
