// function letterCombinations(input_digit) {
//   //Complete the function
// }

// module.exports = letterCombinations;


function letterCombinations(digits) {
  if (digits.length === 0) {
    return []; // Return an empty array for an empty digit string
  }

  const digitToLetters = {
    '2': 'abc',
    '3': 'def',
    '4': 'ghi',
    '5': 'jkl',
    '6': 'mno',
    '7': 'pqrs',
    '8': 'tuv',
    '9': 'wxyz',
  };

  const combinations = ['']; // Start with an empty combination

  for (const digit of digits) {
    const letters = digitToLetters[digit];
    const newCombinations = [];

    for (const combination of combinations) {
      for (const letter of letters) {
        newCombinations.push(combination + letter);
      }
    }

    combinations.length = 0; // Clear the existing combinations
    combinations.push(...newCombinations); // Add new combinations
  }

  return combinations.sort(); // Sort the combinations lexicographically
}

// Example usage
const digits = '23';
const result = letterCombinations(digits);
console.log(result);
