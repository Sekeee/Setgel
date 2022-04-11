const isValid = (string) => {
  const value = {
    "(": 2,
    ")": 3,
    "{": 4,
    "}": 5,
    "[": 6,
    "]": 7,
  };

  if (string.length % 2 !== 0) false;

  const answerArray = [];
  for (s of string) {
    answerArray.push(value[s]);
  }
  return answerArray;
};

console.log(isValid("(){}"));
