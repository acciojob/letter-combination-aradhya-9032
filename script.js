// function letterCombinations(input_digit) {
//   //Complete the function
// }

// module.exports = letterCombinations;


function letterCombinations(digits) {
  const mapping = {
    0: "0",
    1: "1",
    2: "abc",
    3: "def",
    4: "ghi",
    5: "jkl",
    6: "mno",
    7: "pqrs",
    8: "tuv",
    9: "wxyz",
  };
  
  const combinations = [];
  
  if (digits.length === 0) {
    return combinations;
  }
  
  backtrack("", digits);
  
  return combinations;

  function backtrack(current, remaining) {
    if (remaining.length === 0) {
      combinations.push(current);
      return;
    }
    
    const digit = remaining[0];
    const letters = mapping[digit];
    
    for (let i = 0; i < letters.length; i++) {
      const letter = letters[i];
      backtrack(current + letter, remaining.slice(1));
    }
  }
}

// Example usage
// console.log(letterCombinations("23")); // Output: ["ad", "ae", "af", "bd", "be", "bf", "cd", "ce", "cf"]

