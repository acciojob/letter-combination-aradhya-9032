let com = [0, 1, 'abc', 'def', 'ghi', 'jkl', 'mno', 'pqrs', 'tuv', 'wxyz'];

function f(ques, comb, res) {
    if (ques.length === 0) {
        res.push(comb);
        return;
    }
    let dig = parseInt(ques[0]);
    let curStr = com[dig];
    for (let i = 0; i < curStr.length; i++) {
        let curChar = curStr[i];
        f(ques.substring(1), comb + curChar, res);
    }
}

function letterCombinations(input_digit) {
    let res = [];
    if (input_digit.length > 0) {
        f(input_digit, '', res);
    }
    return res;
}

// Example usage
let result = letterCombinations("23");
console.log(result);

module.exports =letterCombinations;